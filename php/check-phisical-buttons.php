<?php
  echo "Check phisical button";
  // echo "Current user is: " . get_current_user();
  echo "Command output is " . shell_exec("python /var/www/html/golia-camper/py/push-button.py");
?>
