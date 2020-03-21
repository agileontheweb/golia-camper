<?php
  error_reporting(E_ALL);
  $data = $_POST['status_text'];
  $id = $_POST['id'];
  $f = fopen('../txt/'.$id.'.txt', 'w+');
  fwrite($f, $data);
  fclose($f);

  $command = escapeshellcmd('python ../py/'.$id.'.py');
  $output = shell_exec($command);

?>
