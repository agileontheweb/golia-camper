<?php
  echo "Riavvio il raspberry";
  exec('sudo python /var/www/html/golia-camper/py/reboot-raspberry.py');
?>
