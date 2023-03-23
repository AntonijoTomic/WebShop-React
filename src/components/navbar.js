import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link, Routes, useNavigate} from 'react-router-dom';
import Slika from "C:/WAMP/www/projekt/src/images/logo.png"
import '../css/navbar.css';
import {  Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { BsFillBasketFill } from "react-icons/bs";



const Navbar =({ukupno}) =>
{
var navigate = useNavigate()
const navigiraj = (Id) =>{
    if(Id > 0){
        navigate(`/artikl/${Id}`)
    }
else if(Id != "/"){
    navigate(`/kategorije`)
}
else{
  navigate(`/`)
}
}
const ponisti= () =>
{
sessionStorage.clear();
localStorage.clear();
}
var Id=0;
    return( 
    
    
       <nav  id="nav" className="navbar navbar-expand-lg navbar-dark gradient-custom">       
          <div className="container-fluid">        
          <img src={Slika} className="nav-slika" />
          <Link className='buttt btn btn-lg' to="/kategorije"><a className="navbar-brand" id="logo">TOMIC PC SHOP</a></Link>
            <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <i className="fas fa-bars text-light"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
                  <li title="Kategorije" id="nav-dropdown"><button className="bicc" onClick={() => {navigiraj(Id="/kategorije")}}>
            Kategorije
            </button></li>
      </ul> 
     
              <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
              <li className="nav-item text-center mx-2 mx-lg-1">
                  <NavDropdown title="Više" id="odjava">
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4" onClick={() => {navigiraj(Id="/"); ponisti();}}>Odjava</NavDropdown.Item>
      </NavDropdown>
      </li>
                <li className="nav-item text-center mx-2 mx-lg-1">
                <Link className='btn btn btn-lg' to="/App/kosara">
                         <div> 
                      <i className="fas fa-bell fa-lg mb-1"></i>
                      <span className="badge rounded-pill badge-notification bg-dark">{ukupno}</span>
                    </div>
                   <BsFillBasketFill /></Link>
                </li>
              </ul>
                  
            </div>
           
          </div>
         
        </nav>
       )
}
export default Navbar;