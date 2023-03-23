<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, Access-Control-Allow-Methods");

include 'configuration.php';
   
$query = "Update artikl set naziv='".$_POST['naziv']."',jed_mjere='".$_POST['jed_mjere']."',opis='".$_POST['opis']."',Cijena='".floatval($_POST['cijena'])."' where id=".$_POST['Id']; 
 

var_dump($_POST['naziv']);
var_dump(floatval($_POST['cijena']));
var_dump($_POST['jed_mjere']);
var_dump($_POST['opis']);
echo json_encode($query);

$oResult = $oConnection->query($query);
  
  
  echo json_encode($oResult);

?>