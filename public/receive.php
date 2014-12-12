<?php 
parse_str($_SERVER['QUERY_STRING'], $get_array);

$newvar = json_encode($get_array);


$file = file_get_contents('receive.json');

$data = json_decode($file);

$data[] = $get_array;
echo json_encode($data);

file_put_contents('receive.json',json_encode($data));
unset($data);
 ?>
<?php 
parse_str($_SERVER['QUERY_STRING'], $get_array);
parse_str($_SERVER['QUERY_STRING']);

$newvar = json_encode($get_array);

$smsMessage = "";

$file = file_get_contents('receive.json');

$data = json_decode($file);

$data[] = $get_array;
// echo json_encode($data);

file_put_contents('receive.json',json_encode($data));
unset($data);
function is_valid_date($value, $format = 'dd.mm.yyyy'){ 
    if(strlen($value) >= 6 && strlen($format) == 10){ 
        
        // find separator. Remove all other characters from $format 
        $separator_only = str_replace(array('m','d','y'),'', $format); 
        $separator = $separator_only[0]; // separator is first character 
        
        if($separator && strlen($separator_only) == 2){ 
            // make regex 
            $regexp = str_replace('mm', '(0?[1-9]|1[0-2])', $format); 
            $regexp = str_replace('dd', '(0?[1-9]|[1-2][0-9]|3[0-1])', $regexp); 
            $regexp = str_replace('yyyy', '(19|20)?[0-9][0-9]', $regexp); 
            $regexp = str_replace($separator, "\\" . $separator, $regexp); 
            if($regexp != $value && preg_match('/'.$regexp.'\z/', $value)){ 

                // check date 
                $arr=explode($separator,$value); 
                $day=$arr[0]; 
                $month=$arr[1]; 
                $year=$arr[2]; 
                if(@checkdate($month, $day, $year)) 
                    return true; 
            } 
        } 
    } 
    return false; 
} 
$userDate = $message;
$fecha = false;
if(is_valid_date($userDate, 'dd.mm.yyyy')){
	$fecha = true;
	
} else {
	$fecha = false;
	
}
// echo 'fecha: '.$fecha." ";
if ($fecha = true){
	$now = date("Y");
	$minyear = $now - 18;
	// echo "message if: ".$minyear;
	$fechaArray = explode(".", $message);
	$year = $fechaArray[2];
	if($year<=$minyear){
		// echo 'El usuario es adulto ';
		$smsMessage = "Congrats%2C%20you%20are%20on%20your%20way%20to%20cool%20Rewards!%20Continue%20sending%20codes%20under%20Red%20Stripe%20crowns%20to%20get%20more%20STRIPES!%0A%0AYou%20now%20have%2010%20STRIPES.%20Get%20more%20by%20visiting%20www.RedStripeRewards.com%20and%20enter%20your%20SMS%20Web%20Access%20Code%3A%20ASDFGH%0A%0AAlso%20visit%20www.RedStripeRewards.com%20to%20connect%20your%20Facebook%2FTwitter%20accounts%20and%20get%20bonus%20STRIPES!";
		
		
	} else {
		$smsMessage="You%20need%20to%20be%20over%2018%20years%20old";

	}
}
if (strpos($message,'redstripechristmas') !== false || strpos($message,'red stripe christmas') !== false) {
    // echo 'redstripechristmas';
    $smsMessage = "Welcome%20to%20Red%20Stripe%20Rewards.%20To%20start%20getting%20STRIPES%2C%20you%20must%20be%2018%2B.%20Please%20confirm%20your%20DOB%20by%20texting%3A%20DD.MM.YYYY";
   

    
}
if (strpos($message,'red stripe christmas') !== false) {
    // echo 'red stripe christmas';
    $smsMessage = "Welcome%20to%20Red%20Stripe%20Rewards.%20To%20start%20getting%20STRIPES%2C%20you%20must%20be%2018%2B.%20Please%20confirm%20your%20DOB%20by%20texting%3A%20DD.MM.YYYY";
    
}

// echo "message: ".$message."\n";
// echo "sender: ".$sender;
$opts = array(
  'http'=>array(
    'method'=>"GET",
    'header'=>"Accept-language: en\r\n" .
              "Cookie: foo=bar\r\n"
  )
);

$context = stream_context_create($opts);

// Open the file using the HTTP headers set above
$url = file_get_contents('http://services.newcomwi.com/mt/http/run?username=redstriperds&password=R3DP8Shrds&sender=8764447744&recipient='.$sender.'&messageType=SMS&message='.$smsMessage, false, $context);
echo $url;
 ?>