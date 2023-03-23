import React from "react"
import { useState, useEffect } from "react";
import axios from "axios";
import Dodavanje2 from "./dodavanjeA2";
import 'bootstrap/dist/css/bootstrap.css';
import AdminNav from "./adminnavbar";
import '../css/dodavanje.css';
import "./global"
import Select from 'react-select'

const ReadUrl ="http://localhost/projekt/src/php/dohvati.php?json_id=zaposlenik"

var odgovor2="";
class DodavanjeA extends React.Component {
  state = {
    file: null,
    base64URL: "",
    odgovor :""
  };

  getBase64 = file => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

  
  handleFileInputChange = e => {
    console.log(e.target.files[0]);
    let { file } = this.state;
    file = e.target.files[0];

    this.getBase64(file)
      .then(result => {
        file["base64"] = result;
        console.log("File Is", file);
        odgovor2 =file.name
        console.log(file.name)
        this.setState({
          base64URL: result,
          file
        });
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({
      file: e.target.files[0]
    });
  };

  render() {
    return (sessionStorage.getItem("admin") == 'true' ?<>
               <AdminNav />
               <h1 >DODAVANJE ARTIKLA</h1>
       <div className="container" id="divunos">

           <label className="label" id="text">Slika: <input type="file" name="file" onChange={this.handleFileInputChange} className="inputslika"/></label>
          
       <Dodavanje2 vrijednost={odgovor2}/>
       

     </div></>
    :<h1>nisi admin</h1>);
  }
}

  export default DodavanjeA;