<?php
$myfile = fopen(localhost + "/txt/raspberry-temp.txt", "r") or die("Unable to open file!");
  echo fread($myfile,filesize(localhost + "/txt/raspberry-temp.txt"));
  fclose($myfile);
?>
