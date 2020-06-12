<?php
$status = $_POST['status_door'];
exec("sudo python /var/www/html/golia-camper/py/door.py $status");
?>
