<!doctype html>
<html lang="it">
  <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link rel="stylesheet" href="css/style.css" crossorigin="anonymous">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
      <title>GOLIATH - Panel control</title>
  </head>
  <body class="overflow-hidden">
    <div role="alert">
      <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
        Porta aperta
      </div>
    </div>

    <div class="flex content-start bg-gray-200 overflow-hidden">
      <div class="w-1/3 border">
        <a href="pages/camera.php">
          <div class="text-gray-700 text-center bg-gray-400 p-10">
            Telecamere
          </div>
        </a>
      </div>
      <div class="w-1/3 border">
        <a href="pages/service.php">
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

    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="js/webradio.js"></script>
  </body>
</html>
