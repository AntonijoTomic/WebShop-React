<?php

class Configuration
{
    public $host ="N/A";
    public $dbName="N/A";
    public  $username="N/A";
    public $password="N/A";

    public function __construct($host="", $dbName="", $username="", $password="")
{
$this->host = $host;
$this->dbName = $dbName;
$this->username = $username;
$this->password = $password;
}
}

class Kategorija
{
    public $Id ="N/A";
    public $Naziv ="N/A";
    public $Slika ="N/A";
    public function __construct($Id="", $Naziv="", $Slika="")
    {
        $this->Id = $Id;
        $this->Naziv = $Naziv;
        $this->Slika = $Slika;
    }
}
abstract class osoba {

    protected $ime ="N/A";
    protected $prezime="N/A";
    protected $adresa ="N/A";
   
    public function getIme()
    {
        return $this->prezime;
    }
    public function getPrezime()
    {
        return $this->prezime;
    }
    public function getAdresa()
    {
        return $this->prezime;
    }
}
class Kupac extends osoba
{
    public $Id ="N/A";
    public $mjesto = "N/A";
    public $email = "N/A";
    public $lozinka = "N/A";
    public function __construct($Id="",$ime=null, $prezime=null, $adresa=null, $mjesto="", $email="",$lozinka="")
    {
        if($Id)  $this->Id = $Id;
        if ($ime) $this->ime = $ime;
        if ($prezime) $this->prezime = $prezime;
        if ($adresa) $this->adresa = $adresa;
        if ($mjesto) $this->mjesto = $mjesto;
        if ($email) $this->email = $email;
        if ($lozinka) $this->lozinka = $lozinka;
    }
}



class zaposlenik extends osoba
{
    public $Id ="N/A";
    public $username ="N/A";
    public $password ="N/A";
    public function __construct($Id="", $username="", $password="")
    {
        $this->Id = $Id;
        $this->username = $username;
        $this->password = $password;
    }
}

 abstract class Artikl{
    public $Id="N/A";
    public $kategorija_Id ="N/A";
    public $naziv="N/A";
    public $opis="N/A";
    public $cijena="N/A";
    public $jed_mjere="N/A";
    public $slika="N/A";

    
}
class artikl2{
    public $broj="N/A";
    public $kid="N/A";
    public $rac="N/A";
    public $obrisan ="N/A";
    public $datum ="N/A";
    public function __construct($Id="", $kategorija_Id="", $naziv="", $cijena="", $jed_mjere="",$opis="", $slika="" ,  $broj="", $kid="", $rac="", $obrisan="", $datum="")
    {
    $this->Id = $Id;
    $this->kategorija_Id = $kategorija_Id;
    $this->naziv = $naziv;
    $this-> cijena= $cijena;
    $this-> opis= $opis;
    $this->jed_mjere = $jed_mjere;
    $this->slika = $slika;
    $this->broj = $broj;
    $this->kid = $kid;
    $this->rac = $rac;
    $this->obrisan = $obrisan;
    $this->datum = $datum;
    }
}
 class Racun{
    public $broj ="N/A";
    public $zaposlenik ="N/A";
    public $ukupniiznos ="N/A";
    public $datum ="N/A";
    public function __construct($broj="", $zaposlenik="", $ukupniiznos="", $datum="")
    {
        $this->broj = $broj;
        $this->zaposlenik = $zaposlenik;
        $this->ukupniiznos = $ukupniiznos;
        $this-> datum= $datum;
    }
    }

class stavka extends Artikl
{
    public $UkupnaCijena ="N/A";
    public $Kolicina ="N/A";
    public function __construct($Id="", $kategorija_Id="", $naziv="", $cijena="", $jed_mjere="",$opis="", $slika="" ,  $UkupnaCijena="", $Kolicina="")
    {
    $this->Id = $Id;
    $this->kategorija_Id = $kategorija_Id;
    $this->naziv = $naziv;
    $this-> cijena= $cijena;
    $this-> opis= $opis;
    $this->jed_mjere = $jed_mjere;
    $this->slika = $slika;
    $this->$UkupnaCijena = $UkupnaCijena;
    $this->Kolicina = $Kolicina;
    }
    public function setKolicina(string $Kolicina): void
    {
        $this->Kolicina = $Kolicina;
    }
    public function setUkupno(string $UkupnaCijena): void
    {
        $this->UkupnaCijena = $UkupnaCijena;
    }
}
?>