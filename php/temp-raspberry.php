<?php
  echo "Temperatura raspberry";
    echo "Command output is " . shell_exec("python /var/www/html/golia-camper/py/temp-raspberry.py");
?>
