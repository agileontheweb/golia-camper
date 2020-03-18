<!doctype html>
<html lang="it">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">

    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
    <title>GOLIATH - Panel control</title>
  </head>
  
  <body class="overflow-hidden">
    <div role="alert" id="generic-notice"></div>
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="0">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="flex-wrap md:flex content-start bg-gray-200 overflow-hidden">
          <div class="w-full md:w-1/3 border">
            <a href="#" class="btn-cameras hover:no-underline" data-target="#carouselExampleControls" data-slide-to="1" >
              <div class="text-gray-700 text-center bg-gray-400 p-10">
                Telecamere
              </div>
            </a>
          </div>
          <div class="w-full md:w-1/3 border">
            <a href="#" class="btn-services hover:no-underline" data-target="#carouselExampleControls" data-slide-to="2" >
              <div class="text-gray-700 text-center bg-gray-400 p-10">
                Servizi
              </div>
            </a>
          </div>

          <div class="w-full border">
            <div class="text-gray-700 text-center bg-gray-400">
              <?php include 'shared/_webradio.php' ?>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 left-0 right-0">
          <div class="border">
            <a href="#">
              <div class="text-gray-400 text-center bg-gray-800">
                Test Goliath
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="carousel-item section-cameras">
        <?php include 'pages/camera.php'?>
      </div>
      <div class="carousel-item">
        <?php include 'pages/service.php'?>
      </div>
    </div>
  </div>

    <script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="js/jquery.countdownTimer.min.js"></script>
    <script src="js/raspberry.js"></script>
    <script src="js/layout.js"></script>
    <script src="js/web-radio.js"></script>
  </body>
</html>
