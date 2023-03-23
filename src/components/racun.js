import axios from "axios";
import React, {useEffect, useState} from "react";
const ReadUrl ="http://localhost/projekt/src/php/dohvati.php?json_id=proba"

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
      <th>Naziv artikla</th>
      <th>Broj racuna</th>
      <th>Ukupna Cijena</th>
      <th>Ime</th>
      <th>Prezime</th>
      <th>Zaposlenik</th>
    </tr>
  </thead>
  
  <tbody>     

  {  artikli?.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.Id}</td>
                    <td>{info.artikli}</td>
                    <td>{info.Broj}</td>
                    <td>{info.iznos}</td>
                    <td>{info.ime}</td>
                    <td>{info.prezime}</td>
                     <td>{info.Username}</td>
                   
                

                </tr>
                
            )
        }
    )}     
  </tbody></table>
    </>
    )
}

export default Ucitaj;