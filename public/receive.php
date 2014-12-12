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
