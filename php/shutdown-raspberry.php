<?php
  $command = escapeshellcmd('python ../py/shutdown-raspberry.py');
  $output = shell_exec($command);
?>
