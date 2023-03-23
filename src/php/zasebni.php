<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, Access-Control-Allow-Methods");

include 'configuration.php';
   
  $sql = "UPDATE artikl SET obrisan = ".$_POST['obrisan']."  where id=".$_POST['Id']; 
 
$oResult = $oConnection->query($sql);
  
  
  echo json_encode($oResult);

?>