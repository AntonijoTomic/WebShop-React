import Navbar from "./navbar";
import axios from "axios";
import React, {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router";
import bootstrap from "bootstrap";
import { Card, Button } from "react-bootstrap";
import '../css/kategorije.css';
import Footerr from './footer'
import { Link } from "react-router-dom";
import Edit from "./artikl";
import { useLocation } from "react-router-dom";
const ReadUrl ="http://localhost/projekt/src/php/dohvati.php?json_id=kategorija"

function Kategorije({ukupnoo})
{
  const location = useLocation();
 
 const [kategorija, setKategorija] =useState([]);
    useEffect(() => {
        axios.get(ReadUrl).then((response) => {
            setKategorija(response.data);
           
        });
      
    },[]);
  
   
    return (
      <>
      <Navbar ukupno={ukupnoo} />
      <div className="div">
        <div className="divkartice">
          {  kategorija?.map(
        (info)=>{  
            const photo = require(`../images/${info.Slika}`);
                      return(
                        <Card id="kartica" key={info.Id} className="Card2" >
                        <Card.Img variant="top" src={photo}  className="slike" />
                        <Card.Body>
                          <Card.Title className="title">{info.Naziv}</Card.Title>
                          <Link to={`/artikl/${info.Id}` }  id="buttonc" className="btn">Prikaži</Link>
                        </Card.Body>
                      </Card>
                 
                     
                        
              
            )
        }
        
    )}     
         <Footerr /></div></div></>)

}

export default Kategorije;