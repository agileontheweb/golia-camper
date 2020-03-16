<?php
  error_reporting(E_ALL);
  $data = $_POST['status_text'];
  $f = fopen('../txt/light-back.txt', 'w+');
  fwrite($f, $data);
  fclose($f);

  $command = escapeshellcmd('python ../py/light-back.py');
  $output = shell_exec($command);
?>
