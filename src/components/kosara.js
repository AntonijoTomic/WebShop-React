import react from "react";
import {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, Link, useParams} from 'react-router-dom';
import Navbar from "./navbar";
import "./global"
import "../css/kosara.css"
import { Card, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import Footerr from "./footer";
import cryptoRandomString from 'crypto-random-string';
import { BsArrowReturnLeft } from "react-icons/bs";
import Modal from 'react-bootstrap/Modal'
import {slika} from '../images/kvacica.jpg'
function Kosara({cart,setCart, handlePrice, handleChange, cijena, nula, ukupnoo, x}) { 
  var templateParams = {
    ti: global.Email,
    ja: 'Tomic PC SHOP',
    message: '',
    iznos: ''
};
console.log(localStorage.length - 1)
var cijenaa = Math.round(cijena * 100) / 100
//var a = JSON.parse(localStorage.getItem((localStorage.length - 1)))
// if(a.length == 0)
// {
//   a = JSON.parse(localStorage.getItem((localStorage.length - 2)))
// }
// console.log(a)
var today= new Date().toLocaleString('de-DE', { timeZone: 'CET' });
console.log(today)
const sendEmail = (e) => {
    
   // e.preventDefault();dodano n na prvo
    emailjs.send('service_hkbb2e9', 'template_npd1amr', templateParams,'tCU5u3NLKrCOqIe1Z')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}
  useEffect(() => {
    handlePrice();
    console.log(cart)
  });
  const [show, setShow] = useState(false);

  const handleClose = () =>{ setShow(false);
    navigate("/App/kosara")};
  const handleShow = () => setShow(true);
const navigate = useNavigate()
const options = [];
let processed = 0;

const photo = require(`../images/kvacica.jpg`);
 return (
  <div className="aaa">
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modaltitle">Uspiješno ste obavili kupnju</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img  className="slikamodal" src={photo}></img>
        </Modal.Body>
        <Modal.Footer>
        <a>Broj vaše narudzbe</a>
        <a className="brojracunaa" disabled>{x}</a>
          <Button variant="primary" onClick={handleClose}>
         U REDU
          </Button>
        </Modal.Footer>
      </Modal>
      <Navbar ukupno={ukupnoo} />
  <div className="divkosara">
    <div className="cijbut">
    <p>{cijenaa} KN</p>
  <button  disabled={ukupnoo === 0} onClick={() =>{ nula();sendEmail();  prazna(cart, setCart);}} className="potvrdi">Potvrdi naruđbu</button> 
  </div>
  {  cart?.map(

        (info)=>{
          const photo = require(`../images/${info.slika}`);
          info.rac = x;
          templateParams.message = templateParams.message + " " + info.naziv;
          templateParams.iznos = cijena;
      info.datum = today;
          options.push(info);
          processed++;
            return(
              info.broj > 0 ?
              <Card className="karticakosara">
                <Card.Body className="karticabody">
                <Card.Img variant="top" src={photo}  id="img" />
                <div className="tekstovi">
                          <Card.Title className="nazivartikla">Naziv artikla: {info.naziv}</Card.Title>
                          <Card.Title className="jed">Jedinica mjere: {info.jed_mjere}</Card.Title>
                          <Card.Subtitle className="title">Cijena: {info.cijena}Kn</Card.Subtitle>
                          </div>
                         <div className="divbuttoni">
                          <button onClick={() => handleChange(info, 1)}>+</button>
                          <Card.Title className="broj">{info.broj}</Card.Title>
                   <button onClick={() => handleChange(info, -1)}>-</button></div>
                        </Card.Body>
                       </Card>
             : null
            )
            if(processed === cart.length) {
              // callback fn, or return
            }
        }
    )}       
<div>
<button className="prazni" disabled></button>
</div>

</div>
<Footerr />
</div>

      
     );

     function prazna(cart, setCart)
{

cart.length=0;
options.forEach(element => {
  if(element.broj >0)
  {
 axios.post(`http://localhost/projekt/src/php/racunInsert`,element);
  }
  })
  
  sessionStorage.clear();

 console.log(sessionStorage)
 options.length=0;
 handleShow();


}

}


export default Kosara;