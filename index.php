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

    <link rel="manifest" href="manifest.json">
    <script src="js/service-worker.js"></script>

    <title>GOLIATH - Panel control</title>
  </head>

  <body class="overflow-hidden font-oswald">
    <div role="alert" id="generic-notice"></div>
    <div class="bg-white-100 relative" role="alert">
      <div class="flex">
        <div class="w-1/2">
          <a href="#" class="home hover:no-underline" data-target="#carouselExampleControls" data-slide-to="0">
            <div class="p-2">
              GOLIATH
	            </div>
          </a>
        </div>
        <div class="w-1/2">
          <div class="flex">
            <div class="rasp-temperature flex-1 p-2 text-center text-xs border-b-4 border-gray-600">
              5.1V Rasp
            </div>
            <div class="flex-1 p-2 text-center text-xs border-b-4 border-orange-600">
              11.3V Servizi
            </div>
            <div class="flex-1 p-2 text-center text-xs border-b-4 border-green-600">
              13V Motore
            </div>
          </div>
        </div>
      </div>
    </div>



    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="0">

      <div class="carousel-inner">
        <div class="carousel-item active">
          <?#php include 'pages/service.php'?>
          <div class="flex md:flex content-start bg-gray-200 overflow-hidden">
            <div class="w-1/2 md:w-1/3 border-r border-solid">
              <a href="#" class="btn-cameras hover:no-underline" data-target="#carouselExampleControls" data-slide-to="1" >
                <div class="text-gray-200 text-center bg-gray-900 px-3 py-5">
                  Telecamere
                </div>
              </a>
            </div>
            <div class="w-1/2 md:w-1/3 border-r border-solid">
              <a href="#" class="btn-services hover:no-underline" data-target="#carouselExampleControls" data-slide-to="2" >
                <div class="text-gray-200 text-center bg-gray-900 px-3 py-5">
                  Servizi
                </div>
              </a>
            </div>
            <div class="w-1/2 md:w-1/3">
              <a href="#" class="btn-cameras hover:no-underline" data-target="#carouselExampleControls" data-slide-to="3" >
                <div class="text-gray-200 text-center bg-gray-900 px-3 py-5">
                  Radio
                </div>
              </a>
            </div>
          </div>


          <?php include 'pages/_light.php'?>
          <?php include 'pages/_service.php'?>
        </div>
        <div class="carousel-item">
          <?php include 'pages/camera.php'?>
        </div>
        <div class="carousel-item">
          <?php include 'pages/service.php'?>
        </div>
        <div class="carousel-item">
          <?php include 'shared/_webradio.php' ?>
        </div>
      </div>
    </div>

    <div class="modal fade" id="modal-air-sanification" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Sanificazione aria</h5>
          </div>
          <div class="modal-body">
            <div class="bg-orange-500 text-white font-bold px-4 py-2">
              Attenzione: Impostare durata sanificazione.
            </div>
            <label class="block mt-4">
              <select class="sanification-timer form-select mt-1 block py-4 w-full">
                <option value="00:00:2" selected>2 sec</option>
                <option value="00:10:00">10 Min</option>
                <option value="00:20:00">20 Min</option>
                <option value="00:30:00">30 Min</option>
                <option value="00:40:00">40 Min</option>
                <option value="00:50:00">50 Min</option>
                <option value="01:00:00">1 ora</option>
                <option value="01:30:00">1 ora 30 Min</option>
              </select>
            </label>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">chiudi</button>
            <button type="button" id="btn-confirm" class="btn btn-primary">Confermo</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="modal-light-dinette" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Luci Dinette</h5>
          </div>
          <div class="modal-body">
            <div class="py-2">
              <div class="flex">
                <div class="w-1/3 border-solid border-1 border-gray-200 border-solid border-1 border-gray-200">
                  <a href="#" id="light-ceiling" class="hover:no-underline">
                    <div class="text-gray-200 text-center bg-gray-900 p-3">
                      Soffitto
                    </div>
                  </a>
                </div>
                <div class="w-1/3 border-solid border-1 border-gray-200 border-solid border-1 border-gray-200">
                  <a href="#" id="light-window" class="hover:no-underline">
                    <div class="text-gray-200 text-center bg-gray-900 p-3">
                      Finestra
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="modal-back-door" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Posteriore</h5>
          </div>
          <div class="modal-body">
            <div class="py-2">
              <div class="flex">
                <div class="w-1/3 border-solid border-1 border-gray-200 border-solid border-1 border-gray-200">
                  <a href="#" id="back-light-ceiling" class="hover:no-underline">
                    <div class="text-gray-200 text-center bg-gray-900 p-3">
                      Soffitto
                    </div>
                  </a>
                </div>
                <div class="w-1/3 border-solid border-1 border-gray-200 border-solid border-1 border-gray-200">
                  <a href="#" id="back-light-window" class="hover:no-underline">
                    <div class="text-gray-200 text-center bg-gray-900 p-3">
                      Finestra
                    </div>
                  </a>
                </div>
                <div class="w-1/3 border-solid border-1 border-gray-200 border-solid border-1 border-gray-200">
                  <a href="#" id="back-window-hatchback" class="hover:no-underline">
                    <div class="text-gray-200 text-center bg-gray-900 p-3">
                      Laterale
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="modal-perfume" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Profumo</h5>
          </div>
          <div class="modal-body">
            <div class="py-2">
              <div class="flex">
                <div class="w-1/3 border-solid border-1 border-gray-200 border-solid border-1 border-gray-200">
                  <a href="#" id="perfume-timer" class="hover:no-underline">
                    <div class="text-gray-200 text-center bg-gray-900 p-3">
                      Tempo
                    </div>
                  </a>
                </div>
                <div class="w-1/3 border-solid border-1 border-gray-200 border-solid border-1 border-gray-200">
                  <a href="#" id="perfume-light" class="hover:no-underline">
                    <div class="text-gray-200 text-center bg-gray-900 p-3">
                      Luce
                    </div>
                  </a>
                </div>
                <div class="w-1/3 border-solid border-1 border-gray-200 border-solid border-1 border-gray-200">
                  <a href="#" id="back-window-hatchback" class="hover:no-underline">
                    <div class="text-gray-200 text-center bg-gray-900 p-3">
                      Laterale
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="node_modules/easytimer/dist/easytimer.min.js"></script>
    <script src="js/layout.js"></script>
    <script src="js/notice.js"></script>
    <script src="js/onOff.js"></script>
    <script src="js/checkStatusServices.js"></script>
    <script src="js/raspberry.js"></script>
    <!-- <script src="js/sanitization.js"></script> -->
    <script src="js/webRadio.js"></script>

  </body>
</html>
