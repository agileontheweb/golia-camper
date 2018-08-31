<!doctype html>

<?php

$command = escapeshellcmd('py/monitor-temp.py');
$output = shell_exec($command);
echo $output;

?>


<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Golia Camper Dashboard</title>
    <link href="node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="scss/layout.css" rel="stylesheet">
  </head>
  <body>
    <main role="main">
      <div class="container">
        <!-- Example row of columns -->
        <div class="row">
          <div class="col-sm  -4">
            <h2>Temperature Cpu Raspberry</h2>
            <div id="temperature-cpu"></div>
            <!-- <form action = "py/monitor-temp.py" method = "POST">
              <input type = "submit" value = "Run the Program!!!">
            </form> -->

          </div>

          <div class="col-sm  -4">
            <div class="googlemap">
              <h2>Retro</h2>
              <p>
                Quando inserisco la retro si attiva la telecamera dietro
                <div class="camper-top-view">
                  <img src=""/>
                  <div class="sensor-back-center">
                    <?#php
                      #$temp = exec('py/ultrasonic_distance.py');
                      #echo "$temp test";
                    #?>

                    <div id="ulstrasonic-sensor"></div>

                  </div>
                </div>
                <br />
                o diventa conta km
              </p>
            </div>
          </div>

          <div class="col-sm  -4">

            <div class="googlemap">
              <h2>Mappa</h2>
            </div>

            <?php
              $command = escapeshellcmd('py/led.py');
              $output = shell_exec($command);
              echo $output;
              echo "ss"
            ?>
          </div>
          <!-- <div class="col-md-4">
            <h2>Giveme position</h2>
            <div id="map"></div>
            <p id="demo"></p>
            <p><a class="btn btn-secondary" href="#" id="getPosition" role="button">position</a></p>
          </div> -->
        </div>
        <hr>
      </div>
    </main>
    <?php include 'shared/footer.php' ?>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBI7LlKH8pWqfJgvOJX9Eshaa2UfNC0McE"></script>

  </body>
</html>
