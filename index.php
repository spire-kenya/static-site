<?php
ini_set('MAX_EXECUTION_TIME', -1);
// Require base functions
require('inc/functions.php');

// Simple Routing
$request = parse_url($_SERVER['REQUEST_URI']);
$path = $request["path"];

$result = trim(str_replace(basename($_SERVER['SCRIPT_NAME']), '', $path), '/');

$result = explode('/', $result);
$max_level = 2;
while ($max_level < count($result)) {
  unset($result[0]);
}
$result = implode('/', $result);
$file = 'pages/' . $result . '.php';

if($result == "") {
  require('pages/home.php');
} elseif(file_exists($file)) {
  require($file);
} else {
  require('pages/404.php');
}

?>
