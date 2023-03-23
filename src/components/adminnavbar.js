import React from "react";
import ReactDOM from "react-dom";
import '../css/dodavanje.css';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';


import { BsFillBasketFill } from "react-icons/bs";

function reset()
{
    sessionStorage.setItem("admin", false);
}

const AdminNav =({}) =>
{
    return(  <div className="navigacija">
        <div className="row">
            <div>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="/Admin">TOMIC PC SHOP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/Admin">Početna</Nav.Link>
                                    <Nav.Link href="/Admin/dodavanje">Dodavanje</Nav.Link>
                                    <Nav.Link  href="/Admin/brisanje">Artikli radnje</Nav.Link>
                                   {/*} <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item ></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>*/}               
                                    </Nav>                                                     
                                   <Nav className="ms-auto" id="odjava">
                                   <Nav.Link  onClick={reset} href="/">Odjava</Nav.Link>
                                   </Nav>
                                </Navbar.Collapse>
                                </Navbar>
            </div>
                </div>
            </div>
      /*
    <nav className="nav">
        <div className="slikatekst">
    <Link className='btn btn btn-lg' to="/Admin">TOMIC PC SHOP</Link>
    <Link className='btn btn btn-lg' to="/Admin/dodavanje">Dodaj</Link>
    <Link className='btn btn btn-lg' to="/Admin/brisanje">Brisanje</Link>
    </div>
  <div className="buttons">  <ul className="ul">
        <li>
        <Link className='btn btn btn-lg' to="/" onClick={reset} >Odjava</Link>
        </li>
    </ul>
 </div>
 
    </nav>*/
     )
}
export default AdminNav;