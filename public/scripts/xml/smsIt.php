<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
$response = new HttpRequest('http://services.newcomwi.com/mt/http/run?username=redstriperds&password=R3DP8Shrds&sender=8764447744&recipient=18765852845&messageType=SMS&message=TestingPHP', HttpRequest::getUrl);
echo $response;
?>