<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.4.0/css/bootstrap4-toggle.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <title>GOLIATH - Panel control</title>
  </head>
  <body>
    <style>
    .progress{ height: 0.5rem; }
    </style>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Goliath</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
    </nav>

    <div class=" align-items-center py-2 bg-dark text-white system">
      <div class="col-4 raspberry-thermometer">
        <small>
          <i class="fas fa-thermometer-full"></i> Cpu:xx<span id="raspberry-temperature"></span>
        </small>
      </div>
    </div>

    <div class="row bg-light border-top">
        <div class="col-4 text-center border-right py-3">
          <p class="align-middle">
            <i class="fas fa-plug"></i>
            <small> / 220 V </small>
          </p>
          <input type="checkbox" id="btn-220" data-toggle="toggle" value="" data-size="xs">
        </div>
        <div class="col-4 text-center border-right py-3">
          <p class="align-middle">
            <i class="fas fa-shower"></i>
            <small> / Acqua</small>
          </p>
          <input type="checkbox" id="btn-pump" data-toggle="toggle" value="" data-size="xs" data-onstyle="success">
        </div>
        <div class="col-4 text-center py-3">
          <p class="align-middle">
            <i class="fas fa-bolt"></i>
            <small class="d-block">Profumo</small>
          </p>
          <input type="checkbox" id="btn-smell-light" data-toggle="toggle" value="" data-size="xs" data-onstyle="success">
        </div>
      </div>

    <div class="container">
      <div class="row py-4 bg-light border-top border-bottom">
      <h6 class="d-block col-12"><i class="far fa-lightbulb"></i> Led</h6>
        <div class="col-3 text-center border-right py-3">
          <p class="align-middle">
            <small class="d-block">Tavolo</small>
          </p>
          <input type="checkbox" id="btn-table-light" data-toggle="toggle" value="" data-size="xs" data-onstyle="success">
        </div>
        <div class="col-3 text-center border-right py-3">
          <p class="align-middle">
            <small class="d-block">Cucina</small>
          </p>
          <input type="checkbox" id="btn-kitchen-light" data-toggle="toggle" value="" data-size="xs" data-onstyle="success">
        </div>
        <div class="col-3 text-center border-right py-3">
          <p class="align-middle">
            <small class="d-block">Divanetti</small>
          </p>
          <input type="checkbox" id="btn-sofa-light" data-toggle="toggle" value="" data-size="xs" data-onstyle="success">
        </div>
        <div class="col-3 text-center py-3">
          <input id="chkToggle2" type="checkbox" checked>
          <p class="align-middle">
            <small class="d-block">Portellone</small>
          </p>
          <input type="checkbox" id="btn-doorback-light" data-toggle="toggle" value="" data-size="xs" data-onstyle="success">
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row py-4 bg-light border-top border-bottom">
        <h6 class="d-block col-12">Liveli acqua</h6>
        <div class="col-4">
          <small>Chiara</small>
          <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div class="col-4">
          <small>Grigia</small>
          <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" style="width: 65%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div class="col-4">
          <small>Nera</small>
          <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" style="width: 85%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>



      <!-- <div class="row py-2 bg-dark text-white system"> -->
        <!-- <div class="col-4">
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
          <a href="#" id="btn-raspberry-temp">click</a>
          <small>
            <i class="fas fa-thermometer-full"></i> Rasp <span id="raspberry-temperature"></span>
          </small>
        </div> -->

    </div>


    <!-- Optional JavaScript -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <!-- https://gitbrent.github.io/bootstrap4-toggle/ -->
    <script src="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.4.0/js/bootstrap4-toggle.min.js"></script>

    <!-- My script -->
    <script type="text/javascript" src="js/layout.js"></script>
  </body>
</html>
