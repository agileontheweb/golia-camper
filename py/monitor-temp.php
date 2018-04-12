<?php
  $myfile = fopen("monitor-temp.txt", "r") or die("Unable to open file!");
  echo fread($myfile,filesize("monitor-temp.txt"));
  fclose($myfile);
?>
