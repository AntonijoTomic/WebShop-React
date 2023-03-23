import axios from "axios";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import AdminNav from "./adminnavbar";
import "./global"
import '../css/ucitaj.css';
import Table from 'react-bootstrap/Table'
const ReadUrl ="http://localhost/projekt/src/php/dohvati.php?json_id=stavka"

function Prikaz()
{
  const params = useParams()
  let Id = params.Id;
    const [artikli, setArtikl] =useState([]);
    useEffect(() => {
        axios.get(`http://localhost/projekt/src/php/dohvati.php?json_id=stavka&Id=${Id}`).then((response) => {
            console.log(response.data);
            setArtikl(response.data);
        });

    },[]);

    return( 
<div className="rut">
<AdminNav ></AdminNav>
<div className="divtablee">
<Table striped bordered hover size="sm" id ="tablee" className="tablee">
  <thead id ="the">
    <tr>
     <th>UkupnaCijena</th>
     <th>Kolicina</th>
     <th>Kategorija_Id</th>
     <th>Naziv</th>
     <th>Jedinica mjere</th>
     <th>Opis</th>
     <th>Cijena</th>
     <th>Slika</th>
    </tr>
  </thead>
  
  <tbody>     
  {  artikli?.map(
        (info)=>{    
          const photo = require(`../images/${info.slika}`);
                      return(         
                <tr>                          
                    <td>{info.UkupnaCijena}</td>
                    <td>{info.Kolicina}</td>
                    <td>{info.kategorija_Id}</td>
                    <td>{info.naziv}</td>
                    <td>{info.jed_mjere}</td>
                    <td>{info.opis}</td>
                    <td>{info.cijena}</td>
                    <td> <img src={photo}  className="slikica"/></td>
                </tr>
              
            )
        }
        
    )}     
  </tbody></Table></div></div>
    )

}

export default Prikaz;