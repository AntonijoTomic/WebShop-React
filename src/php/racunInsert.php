<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, Access-Control-Allow-Methods");

date_default_timezone_set("Europe/Zagreb");
include 'configuration.php';
$var = json_decode(file_get_contents("php://input"), true);
var_dump($var);


// if(is_array($vaar) || is_object($var))
// var_dump($var);
// echo gettype($var);
// foreach ($var as $item)
// {
//    echo gettype($item);
//     / $d= json_encode($item);
//      echo $d;
//      echo gettype($d);
//      var_dump($d);
     $date = date('H:i');
if($date > 16 && $date< 23.59)
{
    $varrr2 = "1";
}
else if($date < 7.59 && $date > 0)
{
    $varrr2 = "2";
}
else if($date > 8 && $date < 15.59)
{
    $varrr2 = "3";
}
    $query = "Insert into racun (Broj, Iznos, zap_id, kupac_id, artikl_id, kolArt, datum) values('".$var["rac"]."','".$var["cijena"]."','".$varrr2."','".$var["kid"]."','".$var["Id"]."','".$var["broj"]."','".$var["datum"]."')";
echo $query;
    $oResult = $oConnection->query($query);
//}


//$query = "Insert into artikli (Naziv,Proizvodac,Model,Kolicina,Cijena) values('".$_POST['naziv']."','".$_POST['proizvodac']."','".$_POST['model']."',".intval($_POST['kolicina']).",".floatval($_POST['cijena']).")";
//INSERT INTO `kv`.`racun` (`Id`, `Broj`, `Iznos`, `zap_id`, `kupac_id`, `artikl_id`, `kolArt`) VALUES ('4', '1111', '23', '1', '1', '2', '1');


?>