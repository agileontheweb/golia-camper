<?php
  $myfile = fopen("ultrasonic-distance.txt", "r") or die("Unable to open file!");
  echo fread($myfile,filesize("ultrasonic-distance.txt"));
  fclose($myfile);
?>
