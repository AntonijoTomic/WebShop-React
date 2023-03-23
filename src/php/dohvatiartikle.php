<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, Access-Control-Allow-Methods");

include 'configuration.php';
$oartiklKateogrija = array();
if(isset($_GET["id"])){
    $id = $_GET['id'];  
  }     
  $sql = "select *, kategorija.naziv as kategorija from artikl inner join kategorija on artikl.kategorija_Id = kategorija.Id".($id?" where kategorija_id=$id":''); 
 
$oResult = $oConnection->query($sql);

while($oRow = $oResult->fetch(PDO::FETCH_BOTH)) {
  $kId = $oRow['id'];
  $kkat = $oRow['kategorija'];
  $kNaziv = $oRow['naziv'];
  $kcijena = $oRow['cijena'];
  $kJed= $oRow['jed_mjere'];
  $kSlika = $oRow['slika'];
  $kOpis = $oRow['opis'];
  $kBroj = "1";
  $kId = "";
  $kRac = "";
  $kObrisan =$oRow['obrisan'];
  $kDatum = "";
  $artiklKateogrija= new artikl2($oRow['id'], $kkat, $kNaziv,$kcijena,$oRow['jed_mjere'],$kOpis, $kSlika, $kBroj,$kId,$kRac, $kObrisan,  $kDatum);
  array_push($oartiklKateogrija, $artiklKateogrija);

  }
  
  echo json_encode($oartiklKateogrija);
?>