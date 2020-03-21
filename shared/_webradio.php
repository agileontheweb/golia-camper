<audio src=""
        autoplay="false"
        controls="false"
        volume="1.0"
        id="playerAudio"
        class="hidden">
</audio>

<div class="flex bg-gray-200">
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    <div class="btn-pause">
      <i class="far fa-stop-circle"></i>
    </div>
  </div>
  <div class="text-gray-700 text-center px-4 py-2 m-2">
    <p class="font-bold radioActive"></p>
  </div>
</div>

<div class="flex bg-gray-200 mt-2">
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    <button type="button" class="btn-kind">
      Genere
    </button>
  </div>
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    <button type="button" class="btn-italian-radio">
      Italiane
    </button>
  </div>
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    <button type="button" class="btn-foreign">
      Estere
    </button>
  </div>
</div>


<?php include '_list_radio.php'?>

<div id="images"></div>
