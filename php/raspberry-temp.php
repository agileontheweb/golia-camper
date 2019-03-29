<?php
  $myfile = fopen("http://192.168.43.202/golia-camper/txt/raspberry-temp.txt", "r") or die("Unable to open file!");
  echo fread($myfile,filesize(localhost + "http://192.168.43.202/golia-camper/txt/raspberry-temp.txt"));
  fclose($myfile);
?>
