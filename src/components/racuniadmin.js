import axios from "axios";
import React, {useEffect, useState} from "react";
import Prikaz from "./adminprikaz";
import { useParams } from "react-router";
import '../css/adminracuni.css';
import './global';
import { Slider } from "@material-ui/core";
import AdminNav from "./adminnavbar";
import Select from 'react-select'
import { Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Table from 'react-bootstrap/Table'
import { yellow } from "@material-ui/core/colors";
const ReadUrl ="http://localhost/projekt/src/php/dohvati.php?json_id=stavka"

function Racuniadmin()
{
  

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#292b2c",
      color: "aliceblue"
      }),
      option: (provided, state) => ({
        ...provided,
        ':active': {color: state.isSelected ? 'red' : 'purple'},
        color: 'white',
        background: "#292b2c"
      })
      

  }
    const [valueState,setValueState] = useState("")
    const options = [
        {  value: '1', label: 'Zaposlenik -1' },
        { value: '2', label: 'Zaposlenik -2' },
        { value: '3', label: 'Zaposlenik -3' },
        { value: 'svi', label: 'Prikazi sve' }
      ]
      const handler = (event) => {
       console.log(event)
        const value = event.value
        setValueState(value)
    }
    
      const MyComponent = () => (
        <>  {/*  <select size="sm">
    <option>Small select</option>
      </select>*/}
        <Select  isSearchable={false} className="select1" options={options}  styles={customStyles}  onChange={handler}/>
      
      </>)
    var min=999;
    var max=0;
    const [racuni, setRacuni] =useState([]);
    useEffect(() => {
        axios.get(`http://localhost/projekt/src/php/dohvati.php?json_id=racun`).then((response) => {
            console.log(response.data);
            setRacuni(response.data);
            
        }); 
    },[]);
    {/*racuni.map((info1)=>(console.log(info1.ukupniiznos)))*/}
    const [val, setVal] = useState([30,150])
    const range=(e, data)=>{
      setVal(data)
      console.log(val)
    }
    const [query, SetQuery] =useState("");
    return(sessionStorage.getItem("admin") == 'true' ?
<div className="velikidiv">
<AdminNav ></AdminNav>
<div className="gornji">
<MyComponent /> <input type="text" className="searchh" placeholder="Pretraži po broju računa"  onChange={(e) => SetQuery(e.target.value)}></input>
<div className="divslider"><Slider className="slide" min={0} step={100}  max={20000}  value={val} onChange={range}></Slider></div>
<small className="vrijednost">Vrijednost: {val[0]} : {val[1]}</small>
</div>
<div className="div-tablica">
<Table id="tablica" striped bordered hover variant="dark">
  <thead>
    <tr>
     <th>UkupnaCijena</th>
     <th>Broj racuna</th>
     <th>Zaposlenik</th>
     <th>Datum</th>
     <th>RADNJA</th>
    </tr>
  </thead>
  
  <tbody>     
  { racuni.filter((racun) => racun.broj.includes(query))?.map(
        (info)=>{    
          
console.log(val[1])
console.log(info.ukupniiznos)
                      return((valueState == info.zaposlenik || valueState == "svi")  && info.ukupniiznos < val[1] ?  
                      
                <tr>                          
                    <td>{info.ukupniiznos}</td>
                    <td>{info.broj}</td>
                    <td>{info.zaposlenik}</td>
                    <td>{info.datum}</td>
                    <Link id="linkovi" to={`/admin/${info.broj}` }  className="btn btn-dark">Prikaži</Link>
                   
                </tr>: null
              
            )
        }
        
    )}     
  </tbody></Table>
    </div></div>
   : <h1>Nisi admin</h1> )

}

export default Racuniadmin;