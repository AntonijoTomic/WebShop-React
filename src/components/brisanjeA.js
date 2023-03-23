import {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, Link, useParams} from 'react-router-dom';
import '../css/brisanje.css';
import AdminNav from './adminnavbar';
const ReadUrl ="http://localhost/projekt/src/php/dohvati.php?json_id=getartikli"
function Brisanje() {

    let { EditId } = useParams();

      const [artikli, setArtikli] =useState([]);
      var oArtikl={
        kategorija_Id: " ",
        naziv: " ",
        jed_mjere: " ",
        slika: " ",
        opis: " ",
        Cijena: " ",
        obrisan: " "
      }
    
    useEffect(() => {
        axios.get(ReadUrl).then((response) => {
            console.log(response.data)
            response.data.map((e)=>{
                if(e.Id == EditId){
                  oArtikl.Naziv=e.Naziv;
                  oArtikl.kategorija_Id=e.kategorija_Id;
                  oArtikl.jed_mjere=e.jed_mjere;
                  oArtikl.Cijena=e.Cijena;
                  oArtikl.slika=e.slika;
                  oArtikl.opis=e.opis;
                  oArtikl.obrisan=e.obrisan;
                }
              });
            setArtikli(response.data);

        });
      
    },[]);
    

    const handleClick =(ID) =>{
                axios.get(ReadUrl).then((response) => {
                    console.log(response.data)
                    response.data.map((e)=>{
                        if(e.Id == ID)
                        {
                          oArtikl.naziv=e.Naziv;
                          oArtikl.kategorija_Id=e.kategorija_Id;
                          oArtikl.jed_mjere=e.jed_mjere;
                          oArtikl.Cijena=e.Cijena;
                          oArtikl.slika=e.slika;
                          oArtikl.opis=e.opis;
                          oArtikl.obrisan=e.obrisan;
                        }
                       
                      });
                      console.log(oArtikl)
                });
                const readUrl = "http://localhost/projekt/src/php/zasebni.php";
                axios({
                    method: "post",
                    url: readUrl,
                    data: 
                    {
                        "Id":ID,
                        "obrisan": '1'
                    },
                    headers: { "Content-Type": "multipart/form-data" },
                  })
                    .then(function (response) {
                      //handle success
                      window.location.reload();
                    })
                    .catch(function (response) {
                      //handle error
                      console.log(response);
                    });  
                
                }
    // useEffect(() => {
   
    //     axios.get(`http://localhost/projekt/src/php/zasebni.php?id=${id}`).then((response) => {
    //   console.log(response);
    //         setArtikl(response.data);
    //     });

    // },[]);
 
    return( 
      sessionStorage.getItem("admin") == 'true' ?
        <div>
          <AdminNav />
          <div className='divtabl'>
            <table id="table" className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Kategorija</th>
            <th>Naziv</th>
            <th>Cijena</th>
            <th>Jedinica mjere</th>
            <th>Opis</th>
            <th>Brisanje</th>
            <th>Azuriranje</th>
          </tr>
        </thead>           
        <tbody>            
                  
     { artikli?.map(
        (info)=>{ 
                      return(
                        info.obrisan == 0 ?
                        <tr > 
                      <td>{info.Id}</td>
                      <td>{info.kategorija_Id}</td>
                      <td>{info.naziv}</td>
                      <td>{info.cijena}</td>
                      <td>{info.jed_mjere}</td> 
                      <td>{info.opis}</td> 
                   <td><button className="buttonbrisi" onClick={() =>{handleClick(info.Id)}}>OBRISI</button></td>
                   <td><Link to={`/admin/edit/${info.Id}`}  ><button className="btn" id="linkazuriraj">Ažuriraj</button></Link></td>
                  </tr>:null
                        
              
            )
        }
        
    )}  </tbody>
    </table>
    </div></div> : <h1>nisi admin </h1>)


}


export default Brisanje;