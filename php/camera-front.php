<?php
  error_reporting(E_ALL);
  $data = $_POST['status_text'];
  $f = fopen('../txt/camera-front.txt', 'w+');
  fwrite($f, $data);
  fclose($f);
?>
