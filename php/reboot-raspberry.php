<?php
  echo "1Riavvio il raspberry";
  //exec("python /var/www/reboot.py"
  //exec("sudo python /var/www/html/golia-camper/py/reboot-raspberry.py")
    echo "Current user is: " . get_current_user();
    echo "Command output is " . shell_exec("python /var/www/html/golia-camper/py/reboot-raspberry.py");


//  exec('sudo python /usr/lib/cgi-bin/reboot.py');
  // system('sudo shutdown -r now');
  // system('sudo /sbin/shutdown -h now');
?>
