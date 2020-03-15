<?php
  $command = escapeshellcmd('python ../py/reboot-raspberry.py');
  $output = shell_exec($command);
?>
