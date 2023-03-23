<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, Access-Control-Allow-Methods");

include 'configuration.php';
$oartiklKateogrija = array(); 
  $sql = "select id, Broj, sum(iznos*kolArt) as Ukupni, datum FROM racun  where kupac_id=".$_GET['Idd']." group by Broj"; 
$oResult = $oConnection->query($sql);

while($oRow = $oResult->fetch(PDO::FETCH_BOTH)) {
  while($oRow = $oResult->fetch(PDO::FETCH_BOTH)) {
    $rIdd = $oRow['id'];
    $rId = $oRow['Broj'];
    $rUkupno = $oRow['Ukupni'];
    $rDatum =$oRow['datum'];
    $racun= new racun( $rIdd, $rId,$rUkupno, $rDatum);
  array_push($oartiklKateogrija, $racun);

  }}
  
  echo json_encode($oartiklKateogrija);
?>