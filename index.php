<!doctype html>
<html lang="it">
  <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <link rel="stylesheet" href="css/style.css">
      <title>GOLIATH - Panel control</title>
  </head>
  <body class="overflow-hidden">
    <div role="alert">
      <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
        Porta aperta
      </div>
    </div>

  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="0">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <?#php include 'pages/camera.php'?>
      <div class="flex content-start bg-gray-200 overflow-hidden">
        <div class="w-1/3 border">
          <a href="#" data-target="#carouselExampleControls" data-slide-to="1" >
            <div class="text-gray-700 text-center bg-gray-400 p-10">
              Telecamere
            </div>
          </a>
        </div>
        <div class="w-1/3 border">
          <a href="#" data-target="#carouselExampleControls" data-slide-to="2" >
            <div class="text-gray-700 text-center bg-gray-400 p-10">
              Servizi
            </div>
          </a>
        </div>

        <div class="w-1/2 border">
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
    <div class="carousel-item">
      <?php include 'pages/camera.php'?>
    </div>
    <div class="carousel-item">
      <?php include 'pages/service.php'?>
    </div>
  </div>

</div>


    <script type="text/javascript" src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

    <!-- <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script> -->
    <!-- <script src="js/home.js"></script> -->
    <script type="text/javascript" src="js/webradio.js"></script>
    <script src="js/cameras.js"></script>
  </body>
</html>
