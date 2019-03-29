<?php
$myfile = fopen("../txt/raspberry-temp.txt", "r") or die("Unable to open file!");
  echo fread($myfile,filesize("../txt/raspberry-temp.txt"));
  fclose($myfile);
?>
