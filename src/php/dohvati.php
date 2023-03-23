<?php

header('Content-type: text/json');
header('Content-type: application/json; charset-utf-8');

header('Access-Control-Allow-Origin: *');


include 'configuration.php';
$oKategorija = array();
$oArtikli = array();
$oZaposlenik = array();
$oKupac = array();
$oStavka = array();
$oRacuni= array();
switch($_GET['json_id'])
{
    case "getartikli":
        $sQuery = "SELECT artikl.Id ,kategorija.Naziv,artikl.naziv,artikl.cijena, artikl.slika ,artikl.jed_mjere,artikl.opis, artikl.obrisan from artikl inner join kategorija on artikl.kategorija_Id = kategorija.Id";
        $oResult = $oConnection->query($sQuery);
        while($oRow = $oResult->fetch(PDO::FETCH_BOTH)) {
            $kId = $oRow['Id'];
            $kkat = $oRow['Naziv'];
            $kNaziv = $oRow['naziv'];
            $kcijena = $oRow['cijena'];
            $kJed= $oRow['jed_mjere'];
            $kSlika = $oRow['slika'];
            $kOpis = $oRow['opis'];
            $kBroj = "1";
            $kId = "";
            $kRac = "";
            $kObrisan =$oRow['obrisan'];
            $kdatum= "";
            $artiklKateogrija= new artikl2($oRow['Id'], $kkat, $kNaziv,$kcijena,$oRow['jed_mjere'],$kOpis, $kSlika, $kBroj,$kId,$kRac, $kObrisan, $kdatum);
            array_push($oArtikli, $artiklKateogrija);
            }
            echo json_encode($oArtikli);
        break;

    case "racuni":
            $query = "select kupljeniartikli.Id, artikl.naziv, artikl.cijena, racun.Broj, racun.Iznos,
             kupac.Ime, kupac.Prezime, zaposlenik.username from kupljeniartikli
              inner join artikl on artikl.id = kupljeniartikli.Artikl_Id
              inner join racun on racun.Id= kupljeniartikli.Racun_Id
              inner join kupac on kupac.id = racun.kupac_id
              inner join zaposlenik on zaposlenik.Id = racun.zap_id;";
            $oResult = $oConnection->query($query);
            $rows = array();
            while($oRow = $oResult->fetch(PDO::FETCH_BOTH)) {
                $rows[] = $oRow;
                }
            echo json_encode($rows);
            break;
    case "proba":
                $queryy= " select racun.Id, racun.Broj, kupac.ime, kupac.prezime ,racun.iznos,zaposlenik.Username, cast(concat('[', group_concat(json_quote(artikl.Naziv)  ORDER BY artikl.Naziv SEPARATOR ','),']') AS json) as artikli
                from racun inner join artikl on artikl.id =racun.artikl_id  inner join zaposlenik on zaposlenik.Id = racun.zap_id join kupac on kupac.id = racun.kupac_id
                group by racun.Broj;";

                $oResult = $oConnection->query($queryy);
                $rows = array();
                while($oRow = $oResult->fetch(PDO::FETCH_BOTH)) {
                    $rows[] = $oRow;
                    }
                echo json_encode($rows);
                break;
        case "kategorija":
                    $queryyy= "select * from kategorija";

                    $oResult = $oConnection->query($queryyy);

                    while($oRow = $oResult->fetch(PDO::FETCH_BOTH)) {
                        $kId = $oRow['Id'];
                        $kNaziv = $oRow['Naziv'];
                        $kSlika = $oRow['Slika'];
                        $Kateogrija= new Kategorija($kId, $kNaziv, $kSlika);
                        array_push($oKategorija, $Kateogrija);
                        }
                    echo json_encode($oKategorija);
                    break;
         case "zaposlenik":
                        $queryyy= "select * from zaposlenik";

                        $oResult = $oConnection->query($queryyy);

                        while($oRow = $oResult->fetch(PDO::FETCH_BOTH)) {
                            $zId = $oRow['Id'];
                            $zUsername = $oRow['Username'];
                            $zLozinka = $oRow['Lozinka'];
                            $Zaposlenik= new zaposlenik($zId, $zUsername, $zLozinka);
                            array_push($oZaposlenik, $Zaposlenik);
                            }
                        echo json_encode($oZaposlenik);
                        break;
                    case "kupac":
                            $queryyy= "select * from kupac";

                            $oResult = $oConnection->query($queryyy);

                            while($oRow = $oResult->fetch(PDO::FETCH_BOTH)) {
                                $kId = $oRow['id'];
                                $kIme = $oRow['Ime'];
                                $kPrezime = $oRow['Prezime'];
                                $kAdresa = $oRow['Adresa'];
                                $kEmail = $oRow['Email'];
                                $kLozinka = $oRow['Lozinka'];
                                $kMjesto = $oRow['Mjesto'];
                                $Kupac= new kupac($kId, $kIme, $kPrezime, $kAdresa,$kMjesto, $kEmail, $kLozinka);
                                array_push($oKupac, $Kupac);
                                }
                            echo json_encode($oKupac);
                            break;
                    case "stavka":
                       // $id = $_GET['racun.broj']; 
                               $queryyy= "select artikl.id, artikl.kategorija_Id,  artikl.naziv,artikl.cijena, artikl.opis, artikl.jed_mjere, artikl.slika, racun.kolArt, racun.broj , racun.Iznos from racun inner join artikl on artikl.id = racun.artikl_id where racun.Broj=".$_GET['Id'];
                  //  $queryyy= "select artikl.id, artikl.kategorija_Id,  artikl.naziv,artikl.cijena, artikl.opis, artikl.jed_mjere, artikl.slika, racun.kolArt from racun inner join artikl on artikl.id = racun.artikl_id where racun.Broj = '5558'";
                                $oResult = $oConnection->query($queryyy);
                                $rows = array();
                             
                                while($oRow = $oResult->fetch(PDO::FETCH_BOTH)) {
                                    $sId = $oRow['id'];
                                    $sKatId = $oRow['kategorija_Id'];
                                    $sNaziv = $oRow['naziv'];
                                    $sCijena = $oRow['Iznos'];
                                    $sOpis = $oRow['jed_mjere'];
                                    $sJed = $oRow['opis'];
                                    $sSlika = $oRow['slika'];
                                    $sKol = $oRow['kolArt'];
                                    $ukupno=(intval($oRow['Iznos'])) * (intval($oRow['kolArt']));
                                    $stavka= new stavka($sId, $sKatId,$sNaziv, $sCijena, $sOpis,$sJed,$sSlika);
                                    $stavka->setKolicina($sKol);
                                    $stavka->setUkupno($ukupno);
                                   // echo json_encode($oRow);
                                    array_push($oStavka, $stavka);
                                    }
                                    echo json_encode($oStavka);
                                
                                break;
                                case "racun":
                                    $query = "select broj, sum(Iznos *kolArt) as ukupno, zap_id, datum FROM racun group by racun.broj";
                                    $oResult = $oConnection->query($query);
                                    $rows = array();
                                    while($oRow = $oResult->fetch(PDO::FETCH_BOTH)) {
                                        $rId = $oRow['broj'];
                                        $rUkupno = $oRow['ukupno'];
                                        $rZap = $oRow['zap_id'];
                                        $rDatum =$oRow['datum'];
                                        $racun= new racun($rId, $rZap,$rUkupno, $rDatum);
                                        //$sCijena = $oRow['cijena'];
                                        array_push($oRacuni, $racun);
                                        }
                                    echo json_encode($oRacuni);
                                    break;


}



?>