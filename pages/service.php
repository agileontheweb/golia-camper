  <?#php include '_service.php'?>
  <?#php include '_light.php'?>

  <div class="flex bg-gray-200 px-3 py-1">
    <p>Sanificazione </p>
  </div>
  <div class="flex bg-gray-200">
    <div class="w-1/2 border-r border-solid">
      <a href="#" id="air-sanification" data-pin="" class="hover:no-underline">
        <div class="text-gray-200 text-center bg-gray-900 p-3">
          Aria
        </div>
      </a>
    </div>
    <div class="w-1/2">
      <a href="#" id="water-sanification"  class="hover:no-underline">
        <div class="text-gray-200 text-center bg-gray-900 p-3">
          Acqua
        </div>
      </a>
    </div>
    <div id="countdownSanification">
      <div class="values"></div>
      <div>
          <button class="startButton">Start</button>
          <button class="pauseButton" >Pause</button>
          <button class="stopButton">Stop</button>
          <button class="resetButton">Reset</button>
      </div>
    </div>
  </div>

  <div class="flex bg-gray-200">
    <div class="flex bg-gray-200 px-3 py-1">
      <p>Raspbbery </p>
    </div>
  </div>
  <div class="flex flex-wrap">
    <div class="w-1/2 border-r border-solid">
      <a href="#" class="reboot-raspberry hover:no-underline">
        <div class="text-gray-200 text-center bg-gray-900 p-3">
          Reboot Rasp
        </div>
      </a>
    </div>
    <div class="w-1/2">
      <a href="#" class="shutdown-raspberry hover:no-underline">
        <div class="text-gray-200 text-center bg-gray-900 p-3">
          Spegni Rasp
        </div>
      </a>
    </div>
  </div>
