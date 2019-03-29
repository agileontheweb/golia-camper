<?php
  $myfile = fopen("./txt/monitor-temp.txt", "r") or die("Unable to open file!");
  echo fread($myfile,filesize("./txt/monitor-temp.txt"));
  fclose($myfile);
?>
