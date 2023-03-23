import Navbar from "./navbar";
import axios from "axios";
import emailjs from "emailjs-com";
import  { useRef }from "react";
import React, {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router";
import bootstrap from "bootstrap";
import { Card, Button } from "react-bootstrap";
import './global';
import '../css/prijava.css';
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import {BsFillArrowLeftCircleFill} from "react-icons/bs";




function Prijava()
{
    var navigate = useNavigate()
    const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false)
navigate('/kategorije')
}
  const handleShow = () => setShow(true);
    var navigate = useNavigate()
    const form = useRef();
    const sendEmail = (e) => {
        
        e.preventDefault();
    
        emailjs.sendForm('service_hkbb2e9', 'template_9co2k64', form.current, 'tCU5u3NLKrCOqIe1Z')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
       handleShow();
        
      };
    return(
        <>
        <div className="prijava">
            <form ref = {form} onSubmit={sendEmail}>
            <Link to="/kategorije" className="linkic"><BsFillArrowLeftCircleFill className="ikona"></BsFillArrowLeftCircleFill></Link>
              <label className="problem"> Opišite svoj problem</label>
                <br></br>
               <textarea type="text" className="textarea" name="message"></textarea>
                <br></br>
                <label>Vaš Email je:</label>
               <div className="emaildiv"> <input type="email" value={global.Email ||  "" } disabled ></input></div>
                <button type="submit" className="posalji">Pošalji</button>
                </form>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Žao nam je!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Žao nam je što je došlo do problema, nadamo se da ćemo u što kraćem vremenu riješiti poteškoće.</Modal.Body>
        <Modal.Footer>

          <Button variant="primary" onClick={handleClose}>
            U redu
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
 

}

export default Prijava;