import React from "react"
import { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import Slika from "C:/WAMP/www/projekt/src/images/logo.png"
import App from "../App";
import '../css/login.css';
import "./global"
import {BsFillArrowLeftCircleFill} from "react-icons/bs";
import { Navigate, useNavigate } from "react-router";
const ReadUrl ="http://localhost/projekt/src/php/dohvati.php?json_id=zaposlenik"
const ReadUrl2 ="http://localhost/projekt/src/php/dohvati.php?json_id=kupac"
const setUrl ="http://localhost/projekt/src/php/registracija.php"
const Login =() =>{

    const [zaposlenik, setZaposlenik] =useState([]);
    const [kupac, setKupac] =useState([]);
    const [isShown, setIsShown] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    var navigate = useNavigate();

    useEffect(() => {
        setIsShown(true);
        setIsShown2(false);
        axios.get(ReadUrl).then((response) => {
            setZaposlenik(response.data);
        });
    },[]);
    useEffect(() => {
      setIsShown(true);
      setIsShown2(false);
      axios.get(ReadUrl2).then((response) => {
          setKupac(response.data);
      });
  },[]);
    const [inputs, setInputs] = useState({});
    const registiraj = event => {
        event.preventDefault();
      axios({
        method: "post",
        url: setUrl,
        data: 
        {
            "Ime":inputs.Ime,
            "Prezime": inputs.Prezime,
            "Adresa":inputs.Adresa,
            "Mjesto":inputs.Mjesto,
            "Email":inputs.Email,
            "Lozinka":inputs.Lozinka
        },
        headers: { "Content-Type": "multipart/form-data" },
      })
      window.location.reload();
    };
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
      }
     

    const handleClick = event => { 
      setIsShown(false);
      setIsShown2(true);
    }; 


      const handleClick3 = event => {
      var d = (document.getElementById(1).value);
      var d2 = (document.getElementById(2).value);
var broj =0;
      
      zaposlenik?.map(
        (info)=>
        {if(d === info.username &&  d2 === info.password)
         {
          broj = 2;
          global.Admin = true;
          sessionStorage.setItem("admin", true);
           navigate("/admin");
         }
        else if(d === info.username &&  d2 !== info.password){
          alert("neispravna lozinka")
        }
        })
       if(broj !== 2){
        kupac?.map(
          (info2)=>{if(d === info2.email &&  d2 === info2.lozinka){
            global.Id = info2.Id;
            global.Email = info2.email;
             navigate("/kategorije", {state :{id : info2.Id}});
           } else if(d === info2.email &&  d2 !== info2.lozinka){
            alert("neispravna lozinka")
          }
         })
       }
      };
  
  
    return (
      <div className="prikaz">
   
        {isShown && (
          <Box1 />
        )}
        {isShown2 &&   <div className="animated fadeInDown" >
           <div className="formareg">
     <form> 
     <button className="buttonikona" onClick={window.location.reload}><BsFillArrowLeftCircleFill /> </button> 
        <label className="label">Ime:
          <input type="text"
                    name="Ime"
                    value={inputs.Ime || ""}
           onChange={handleChange}
        />
         </label>
        <label className="label">Prezime:
          <input type="text" value={inputs.Prezime || ""}  onChange={handleChange}
    name="Prezime" />
        </label>
        <label className="label">Adresa: 
        <input type="text" value={inputs.Adresa || ""} onChange={handleChange}
    name="Adresa" />
       </label>
        <label className="label">Mjesto:
        <input type="text" value={inputs.Mjesto || ""}   onChange={handleChange}
    name="Mjesto" />
       </label>{" "} 
        <label className="label">Email: 
          <input type="email"  value={inputs.Email || ""} onChange={handleChange} 
    name="Email"/>
       </label>
        <label className="label" >Lozinka: 
          <input type="password" 
           value={inputs.Lozinka || ""}
    name="Lozinka" 
    onChange={handleChange} />
       </label>
      </form>
      <button type="button" id="button" onClick={registiraj}>Registriraj</button>
      </div></div>}
      </div>
    );
  

  function Box1() {
    return (
        <div className="animated fadeInDown" >
        <form id="log" className="formalog" >
        <img src={Slika} className="slika" />
        <div className="naziv">TOMIC PC SHOP</div>
        <div className="inputs">
        <label className="label" >Unesite korisničko ime:
        </label>
        <input type="text" className="inpt" id="1"/>
       
        <label className="label" >Unesite lozinku:
         </label>
        <input type="password"className="inpt" id="2"/>
       
        </div>
        <button type="button" id="button" onClick={handleClick3}>Prijavi se</button>
      <button type="button"  onClick={handleClick} className="reg">Registracija</button>
      </form>

    </div>
    );}

  }

  export default Login;