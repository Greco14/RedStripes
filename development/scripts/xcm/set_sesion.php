<?php
session_start();
//!isset($_POST["dd"]) || !isset($_POST["mm"]) || !isset($_POST["yyyy"]) || 
if(!isset($_POST["keepl"]))
{
	die();
}

// $day=(int)mysql_escape_string($_POST["dd"]);
// $month=(int)mysql_escape_string($_POST["mm"]);
// $year=(int)mysql_escape_string($_POST["yyyy"]);
$keep=(int)mysql_escape_string($_POST["keepl"]);


//$obj= new BFWebServices();

//if($obj->validateLDA($month,$day,$year,"Mexico"))
if(true)
{
     echo "yes";
     if($keep==1)
     $_SESSION["age"]=18;
 }
 else
 {
 	echo "under";
 	$_SESSION["age"]=-18;
 }
?>