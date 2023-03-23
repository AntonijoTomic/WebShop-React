import axios from "axios";
import React, {useEffect, useState} from "react";
import '../css/ucitaj.css';
const ReadUrl ="http://localhost/projekt/src/php/dohvati.php?json_id=getartikli"

function Ucitaj()
{
    const [artikli, setArtikl] =useState([]);
    useEffect(() => {
        axios.get(ReadUrl).then((response) => {
            console.log(response.data);
            setArtikl(response.data);
        });

    },[]);

    return(
<>
<table className="table">
  <thead>
    <tr>
      <th>Id</th>
      <th>kategorija</th>
      <th>naziv</th>
      <th>jed_mjere</th>
      <th>cijena</th>
    </tr>
  </thead>
  
  <tbody>     
  {  artikli?.map(
        (info)=>{ 
           
          const photo = require(`../images/${info.slika}`);
                      return(
                
                <tr>
                  
                  
                    <td>{info.Id}</td>
                    <td>{info.kategorija_Id}</td>
                    <td>{info.naziv}</td>
                    <td>{info.cijena}</td>
                    <td>{info.jed_mjere}</td>
                    <td> <img src={photo}  className="slikica"/></td>
                </tr>
              
            )
        }
        
    )}     
  </tbody></table>
    </>
    )

}

export default Ucitaj;