<?php
  error_reporting(E_ALL);
  $data = $_POST['status_text'];
  $f = fopen('../txt/light-left.txt', 'w+');
  fwrite($f, $data);
  fclose($f);

  $command = escapeshellcmd('python ../py/light-left.py');
  $output = shell_exec($command);
?>
