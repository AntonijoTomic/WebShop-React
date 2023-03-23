import Navbar from "./navbar";
import axios from "axios";
import React, {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router";
import bootstrap from "bootstrap";
import { Card, Button } from "react-bootstrap";

import '../css/kategorije.css';

import {BsInstagram, BsFacebook, BsGoogle, BsYoutube} from "react-icons/bs"
import { Link } from "react-router-dom";



function Footerr()
{
    return(
        <footer className="footer">
        <small id="izradio">Izradio : ANTONIJO TOMIĆ</small>
        <div  className="divzabuttone">
            <a  href="https://www.instagram.com/vuv "className="buttoni"><BsInstagram /></a>
            <a  href="https://www.facebook.com/virovitica.vuv"className="buttoni"><BsFacebook /></a>
            <a  href="https://vuv.hr/ "className="buttoni"><BsGoogle /></a>
            <a  href="https://www.youtube.com/watch?v=L2rZgRThJGc"className="buttoni"><BsYoutube /></a>
        </div>
        <small className="small"><Link className="buttoni" to={`/prijava/`}>Nešto nije u redu?</Link></small>
      </footer>
    )
 

}

export default Footerr;