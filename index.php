<!doctype html>
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
          <div class="col-md-4">
            <h2>Temperature Cpu Raspberry</h2>
            <div id="temperature-cpu"></div>
          </div>
          <div class="col-md-4">
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
