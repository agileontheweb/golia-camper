<?php
  $myfile = fopen("ulstrasonic-distance.txt", "r") or die("Unable to open file!");
  echo fread($myfile,filesize("ulstrasonic-temp.txt"));
  fclose($myfile);
?>
