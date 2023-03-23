import axios from "axios";
import {useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../css/brisanje.css"

function UcitajPodatke()
{
  const [artikli, setData] = useState(null);
  let { EditId } = useParams();

  var oArtikl={
     naziv: " ",
     jed_mjere: " ",
     cijena: " ",
     ops: " "
   }
  useEffect(() => 
  {
    axios.get("http://localhost/projekt/src/php/dohvati.php?json_id=getartikli").then((response) => {
      response.data.map((e)=>{
          if(e.Id == EditId){
            oArtikl.naziv=e.naziv;
            oArtikl.jed_mjere=e.jed_mjere;
            oArtikl.opis=e.opis;
            oArtikl.cijena=e.cijena;
          }
        });
        setData(oArtikl);
      });
  },[]); 
 async function Ucitaj()
 {
  
 }

 if(artikli)
 {return artikli;}
 else 
 {return oArtikl;}

}



export default function EditForm()
{
 
  const artikl = UcitajPodatke(); 
  let { EditId } = useParams();
  let [inputs, setInputs] = useState(artikl); 
  const navigate = useNavigate();
 
if(!artikl) return null
  const handleSubmit = (event) => {
    event.preventDefault();
    const readUrl = "http://localhost/projekt/src/php/Updateartikl.php";
    axios({
        method: "post",
        url: readUrl,
        data: 
        {
            "Id":EditId,
            "naziv":inputs.naziv || artikl.naziv,
            "jed_mjere": inputs.jed_mjere || artikl.jed_mjere,
            "cijena":inputs.Cijena || artikl.cijena,
            "opis":inputs.opis || artikl.opis
        },
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });  
       navigate('/admin/brisanje')
    }

const handleChange = (event) => 
  {
    const name = event.target.name;
    const value = event.target.value;
    //console.log(name);
   // console.log(event.target.value);
    setInputs(values => ({...values, [name]: value}))
    console.log(inputs)
    }
return(
<div id="containeredit" className="container w-25 p-3">
<form className="form" onSubmit={handleSubmit}> 
<div className="form-group">
</div>
<div className="form-group">
<label className="labell">Naziv</label>
<input type="text" required className="form-control" 
onChange={handleChange}
//onLoad={inputs.naziv = artikl[0].Naziv}
name="naziv"
value={inputs.naziv ||  "" }
/>

</div>
<div className="form-group">
<label className="labell">Jedinica mjere</label>
<input type="text" required className="form-control" 
//onLoad={inputs.model = artikl[0].Model}
onChange={handleChange} 
name="jed_mjere"
value={inputs.jed_mjere || "" }
/>
</div>
<div className="form-group">
<label className="labell">Opis</label>
<input type="text" required className="form-control"
//onLoad={inputs.kolicina = artikl[0].Kolicina} 
onChange={handleChange} 
name="opis"
value={inputs.opis || "" }
/>
</div>
<div className="form-group">
<label className="labell">Cijena</label>
<input type="number" step="0.01" required className="form-control" 
name="Cijena"
//onLoad={inputs.cijena = artikl[0].Cijena} 
onChange={handleChange} placeholder="Unos u kn" 
value={inputs.Cijena || "" || inputs.cijena }
/>
</div>
<div className="form-group">
<button type="submit" className="btn btn-primary mt-1 end-0">Ažuriraj</button>
</div>
</form>
</div>
)
}