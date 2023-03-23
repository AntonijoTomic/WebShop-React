import axios from "axios";
import React, {useEffect, useState} from "react";
import Prikaz from "./adminprikaz";
import { useParams , useNavigate} from "react-router";
import '../css/dodavanje.css';
import Select from 'react-select'
import AdminNav from "./adminnavbar";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
//import DodavanjeA from "./dodavanjeA";
const setUrl ="http://localhost/projekt/src/php/insertArtikl"

function Dodavanje2({vrijednost})
{
  var navigate = useNavigate();
  const customStyles = {
    control: (base, state) => ({
      ...base,
      color: 'white',
      borderRadius:'10px'
      }),
      option: (provided, state) => ({
        ...provided,
        ':active': {color: state.isSelected ? 'red' : 'purple'},
        color: 'black'
      })
      

  }
    console.log(vrijednost)
    const namme = "file";
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        setInputs(values => ({...values, [namme]: vrijednost}))
        }
    
const [valueState,setValueState] = useState("")
        const options = [
          { value: '1', label: 'Misevi' },
          { value: '2', label: 'Monitori' },
          { value: '3', label: 'Tipkovnice' },
          { value: '4', label: 'Mobiteli' },
          { value: '5', label: 'Laptopi' },
          { value: '6', label: 'Gaming PC' },
          { value: '7', label: 'PlayStation' },
          { value: '8', label: 'SmartSatovi' },
          { value: '9', label: 'Graficke Kartice' },
          { value: '10', label: 'Procesori' },
          { value: 'svi', label: 'Prikazi sve' }
        ]
        const handler = (event) => {
         const name = 'Kategorije';
         const value = event.value
         setInputs(values => ({...values, [name]: value}))
          setValueState(value)
      }
      const DodajArtikl = event => {
        event.preventDefault();
      axios({
        method: "post",
        url: setUrl,
        data: 
        {
            "Naziv":inputs.Naziv,
            "Jed_Mjere": inputs.Jed,
            "Kategorije":inputs.Kategorije,
            "Cijena":inputs.Cijena,
            "File":inputs.file,
            "Opis":inputs.Opis,
            "Obrisan":"0"
        },
        headers: { "Content-Type": "multipart/form-data" },
      })
     window.location.reload();
    };
    
            

    return (
      
        <>
        <form>
           <label id="text" className="label">Naziv:
            <input  type="text"  name="Naziv" value={inputs.Naziv || ""}
           onChange={handleChange} /></label> 
            <label id="text" className="label">Jedinica mjere:
              <input type="text" name="Jed" value={inputs.Jed || ""}
           onChange={handleChange} />
        </label>
        <label id="text" className="label">Kategorija:
        <Select  className="select" options={options} styles={customStyles}  onChange={handler} isSearchable={false}/>
       </label>
          <label id="text" className="label">Cijena:
           <input type="number"  
       name="Cijena"  value={inputs.Cijena || ""}
       onChange={handleChange}/>
          </label>{" "} 
           <label id="text" className="label">Opis: 
           <textarea id="message" name="Opis" value={inputs.Opis || ""}
       onChange={handleChange} />
          </label>

         </form>
        <button type="button" className="button" onClick={DodajArtikl}>Dodaj!</button>
        </> 
  
    );
    
}

export default Dodavanje2;