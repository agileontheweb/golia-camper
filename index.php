<!doctype html>
<?php
  $command = escapeshellcmd('py/monitor-temp.py');
  $output = shell_exec($command);
  echo $output;
?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.4.0/css/bootstrap4-toggle.min.css" rel="stylesheet">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <title>GOLIATH - Panel control</title>
  </head>
  <body>

    <div class="container">
      <div class="row align-items-center py-2 bg-dark text-white system">
        <div class="col-4">
          <small>
            <i class="fas fa-car-battery"></i> Bs 12 V
          </small>
        </div>
        <div class="col-4">
          <small>
            <i class="fas fa-car-battery"></i> Bm 12 V
          </small>
        </div>
        <div class="col-4 raspberry-thermometer">
          <small>
            <i class="fas fa-thermometer-full"></i> Rasp <span id="temperature-cpu"></span>
          </small>
        </div>
      </div>
      <div class="row align-items-center bg-light py-3 border-top">
        <div class="col-8">
          <p class="align-middle"><i class="fas fa-bolt"></i> <span class="ml-2">12 V</span> </p>
        </div>
        <div class="col-4 text-right">
          <input type="checkbox" checked data-toggle="toggle" data-onstyle="secondary" data-size="xs" data-onstyle="success">
        </div>
      </div>
      <div class="row align-items-center bg-light py-3 by border-top">
        <div class="col-8">
          <p class="align-middle"><i class="fas fa-plug"></i> <span class="ml-2">220 V </span></p>
        </div>
        <div class="col-4 bg-light text-right">
          <input type="checkbox" checked data-toggle="toggle" data-onstyle="secondary" data-size="xs" data-onstyle="success">
        </div>
      </div>

      <div class="row align-items-center bg-light py-3 by border-top">
        <div class="col-8">
          <p class="align-middle"><i class="fas fa-shower"></i> Acqua</p>
        </div>
        <div class="col-4 bg-light text-right">
          <input type="checkbox" checked data-toggle="toggle" data-onstyle="secondary" data-size="xs" data-onstyle="success">
        </div>
      </div>
      <div class="row align-items-center bg-light py-3 by border-top">
        <div class="col-8">
          <p class="align-middle"><i class="fas fa-lightbulb"></i> Tavolo</p>
        </div>
        <div class="col-4 bg-light text-right">
          <input type="checkbox" checked data-toggle="toggle" data-onstyle="secondary" data-size="xs" data-onstyle="success">
        </div>
      </div>

      <div class="py-3">
        <h4>Led control</h4>
      </div>

      <div class="row align-items-center bg-light py-3 by border-top">
        <div class="col-8">
          <p class="align-middle"><i class="far fa-lightbulb"></i>Led Tavolo</p>
        </div>
        <div class="col-4 bg-light text-right">
          <input type="checkbox" checked data-toggle="toggle" data-onstyle="secondary" data-size="xs" data-onstyle="success">
        </div>
      </div>

      <div class="row align-items-center bg-light py-3 by border-top">
        <div class="col-8">
          <p class="align-middle"><i class="far fa-lightbulb"></i>Led Cucina</p>
        </div>
        <div class="col-4 bg-light text-right">
          <input type="checkbox" checked data-toggle="toggle" data-onstyle="secondary" data-size="xs" data-onstyle="success">
        </div>
      </div>

      <div class="row align-items-center bg-light py-3 by border-top">
        <div class="col-8">
          <p class="align-middle"><i class="far fa-lightbulb"></i>Led Divanetti</p>
        </div>
        <div class="col-4 bg-light text-right">
          <input type="checkbox" checked data-toggle="toggle" data-onstyle="secondary" data-size="xs" data-onstyle="success">
        </div>
      </div>

      <div class="row align-items-center bg-light py-3 by border-top">
        <div class="col-8">
          <p class="align-middle"><i class="far fa-lightbulb"></i>Led Portellone</p>
        </div>
        <div class="col-4 bg-light text-right">
          <input type="checkbox" checked data-toggle="toggle" data-onstyle="secondary" data-size="xs" data-onstyle="success">
        </div>
      </div>

      <div class="py-3">
        <h4>Siurezza</h4>
        <div class="row align-items-center bg-light py-3 by border-top">
          <div class="col-8">
            <p class="align-middle"><i class="fas fa-map-marker-alt"></i> <span class="ml-2">Posizione</span> </p>
          </div>
          <div class="col-4 bg-light text-right">
            <input type="checkbox" checked data-toggle="toggle" data-onstyle="secondary" data-size="xs" data-onstyle="success">
          </div>
        </div>
      </div>

    </div>


    <!-- Optional JavaScript -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> -->
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script> -->

    <!-- https://gitbrent.github.io/bootstrap4-toggle/ -->
    <script src="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.4.0/js/bootstrap4-toggle.min.js"></script>

    <!-- My script -->
    <script type="text/javascript" src="js/layout.js"></script>

  </body>
</html>
