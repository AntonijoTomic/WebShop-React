<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, Access-Control-Allow-Methods");

date_default_timezone_set("Europe/Zagreb");
include 'configuration.php';
var_dump (intval($_POST['Kategorije']));
var_dump ( $_POST['Naziv']);
var_dump ($_POST['Jed_Mjere']);
var_dump ($_POST['Cijena']);
var_dump ($_POST['File']);
var_dump ($_POST['Opis']);


 $query = "Insert into artikl (kategorija_Id, naziv, jed_mjere, cijena, slika, opis, obrisan) values('".intval($_POST['Kategorije'])."','".$_POST['Naziv']."','".$_POST['Jed_Mjere']."','".floatval($_POST['Cijena'])."','".$_POST['File']."','".$_POST['Opis']."','".$_POST['Obrisan']."')";
$oResult = $oConnection->query($query);
echo $oResult;
//}


//$query = "Insert into artikli (Naziv,Proizvodac,Model,Kolicina,Cijena) values('".$_POST['naziv']."','".$_POST['proizvodac']."','".$_POST['model']."',".intval($_POST['kolicina']).",".floatval($_POST['cijena']).")";
//INSERT INTO `kv`.`racun` (`Id`, `Broj`, `Iznos`, `zap_id`, `kupac_id`, `artikl_id`, `kolArt`) VALUES ('4', '1111', '23', '1', '1', '2', '1');


?>