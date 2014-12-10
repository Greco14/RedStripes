<?php 
parse_str($_SERVER['QUERY_STRING'], $get_array);
$texto = $_SERVER['QUERY_STRING'];
// echo $_SERVER['QUERY_STRING'];
// print_r($get_array);
// echo $get_array;
foreach($get_array as $x => $x_value) {
    echo $x .": ". $x_value;
    echo "<br>";
}
 ?>
