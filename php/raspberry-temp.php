<?php
  $myfile = fopen(localhost + "golia-camper/txt/raspberry-temp.txt", "r") or die("Unable to open file!");
  echo fread($myfile,filesize(localhost + "golia-camper/txt/raspberry-temp.txt"));
  fclose($myfile);
?>
