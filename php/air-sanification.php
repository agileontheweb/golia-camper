<?php
  error_reporting(E_ALL);
  $data = $_POST['timer'];
  $f = fopen('../txt/air-sanification.txt', 'w+');
  fwrite($f, $data);
  fclose($f);

  // $command = escapeshellcmd('python ../py/'.$id.'.py');
  // $output = shell_exec($command);

?>
