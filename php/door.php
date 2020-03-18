<?php
  echo "entro";
  $command = escapeshellcmd('python ../py/reboot-raspberry.py');
  $output = shell_exec($command);
?>
