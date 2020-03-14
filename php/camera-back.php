<?php
  error_reporting(E_ALL);
  $data = $_POST['status_text']; // the key we sent was "something"
  $f = fopen('../txt/camera-back.txt', 'w+');
  fwrite($f, $data);
  fclose($f);
?>
