<?php
$status = $_POST['status_perfume'];
exec("sudo python /var/www/html/golia-camper/py/perfume.py $status");
?>
