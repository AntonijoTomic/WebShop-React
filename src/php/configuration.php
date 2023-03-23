<?php
include 'classes.php';
$host = 'localhost';
$dbname = 'kv';
$username = 'root';
$password = '';
try
{
 $oConnection = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
 //echo "Connected to $dbname at $host successfully.";
}
catch (PDOException $pe)
{
 die("Could not connect to the database $dbname :" . $pe->getMessage());
}

?>