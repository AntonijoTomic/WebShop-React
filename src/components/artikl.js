import {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, Link, useParams} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "./global";
import "../css/artikli.css"
import { Slider } from "@material-ui/core";
import Navbar from './navbar';
import Footerr from './footer'
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Card, Button } from "react-bootstrap";
import  {BsFillPlusSquareFill} from "react-icons/bs";
import ReactPaginate from 'react-paginate';
function CustomToggle({ children, eventKey, ID }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log("stisnut")
      );
  return (
    <BsFillPlusSquareFill
      type="button"
      alig
      onClick={decoratedOnClick}
    >
      {children}
    </BsFillPlusSquareFill>
  );
}

const Edit = ({handlePrice, cart, setCart, handleClick, ukupnoo }) => {
  const [artikl, setArtikl] =useState([]);
  const params = useParams();
const [pagenumber,  setpagenumber] = useState(0)
const artiklinastranici = 5;
const posjecenestranice = pagenumber * artiklinastranici;
const display = artikl.slice (posjecenestranice, posjecenestranice + artiklinastranici)

const [val, setVal] = useState([0,1000])
    const range=(e, data)=>{
      setVal(data)

    }
    var polje = Array();
const [query, SetQuery] =useState("")
let Id = params.ID;
artikl.map((art)=>{if(art.obrisan == "1")
{var ind =artikl.indexOf(art);
  console.log(ind);
  artikl.splice(ind, 1);}})
useEffect(() => {
    axios.get(`http://localhost/projekt/src/php/dohvatiartikle.php?id=${Id}`).then((response) => {
        setArtikl(response.data);
       
    });
},[]);
const brojstranica = Math.ceil(artikl.length / artiklinastranici)
const changePage  = ({selected}) => {
    setpagenumber(selected)
  }  
  console.log(query)
return(
          <>
          
          <Navbar ukupno={ukupnoo} />
          <div className="div1">
        <div className="divkartice2">
        <div className='filteri'>
          <input type="text" className="trazilica" placeholder="Pretraži artikle"  onChange={(e) => SetQuery(e.target.value)}>
          </input>
          <div className="divslider1"><Slider className="slide1" min={0} step={50}  max={11000}  value={val} onChange={range}></Slider></div>
<small className="vrijednost1">Vrijednost: {val[0]} : {val[1]}</small><div class="slide-right"><small>TOMIC PC SHOP</small></div>
</div>
       { display.filter((artikli)=> artikli.naziv.includes(query)).map(
        (info)=>{ 
          polje.push(info.cijena)
          const max = polje.reduce((prev, current) => (prev.y > current.y) ? prev : current)
info.kid = global.Id;
const photo = require(`../images/${info.slika}`);
                      return(
                        info.obrisan == 0 &&  (info.cijena < val[1] && info.cijena > val[0] )?
                        <Card id="kartica2" key={info.Id} className="kartica" >
                    <Card.Img variant="top" src={photo}  className="slike2" />
                    <Card.Body>
                          <Card.Title className="title"> {info.naziv}</Card.Title>
                          <Card.Subtitle className="title">Kategorija: {info.kategorija_Id}</Card.Subtitle>
                          <Card.Subtitle className="title">Jedinica mjere: {info.jed_mjere}</Card.Subtitle>
                          <Card.Subtitle className="title">Cijena: {info.cijena}KN</Card.Subtitle>
                          <Accordion defaultActiveKey="0">           
                            <CustomToggle ID={info.Id} Artikli={artikl}eventKey="1">Opis</CustomToggle>   
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>{info.opis}</Card.Body>
                          </Accordion.Collapse>
                      </Accordion>
                          <Card.Text className="collapse" id="collapseExample">{info.opis}</Card.Text>
                          <button onClick={() => handleClick(info)} className="btn btn-dark">DODAJ U KOŠARICU</button>
                        </Card.Body>
                   
                    {/*<td><button onClick={<DODAJ/>}>DODAJ U KOŠARICU</button></td>*/}
                    {/*<td><button onClick={() => handleClick(info)}>dodaj</button></td>*/}
                    {/*  <td> <img src={photo}  className="slikica"/></td>*/} 
            </Card> : null                    
            )
        }
        
    )} 
    <ReactPaginate previousLabel={"Prethodni"}
    nextLabel={"Sljedeći"}
    pageCount={brojstranica}
    onPageChange={changePage}
    containerClassName={"paginationBttns"}
    previousLinkClassName={"previousBttn"}
    nextLinkClassName={"nextBttn"}
    disabledClassName={"paginationDisabled"}
    activeClassName={"paginationActive"}
    />
    <Footerr /> 
</div></div></>
    )   
}


export default Edit;