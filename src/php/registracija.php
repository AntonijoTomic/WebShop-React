<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, Access-Control-Allow-Methods");

include 'configuration.php';


$query = "Insert into kupac (Ime, Prezime, Adresa, Email, Lozinka, Mjesto) values('".$_POST['Ime']."','".$_POST['Prezime']."','".$_POST['Adresa']."','".$_POST['Email']."','".$_POST['Lozinka']."','".$_POST['Mjesto']."')";
$oResult = $oConnection->query($query);
?>