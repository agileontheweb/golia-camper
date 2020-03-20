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


  <div class="flex bg-gray-200">
    <div class="flex">
      <p>Servizi</p>
    </div>
  </div>

  <div class="flex">
    <div class="w-1/3 border-solid border-1 border-gray-200 border-solid border-1 border-gray-200">
      <a href="#" id="inverter" class="hover:no-underline">
        <div class="text-gray-200 text-center bg-gray-900 p-10">
          220V
        </div>
      </a>
    </div>
    <div class="w-1/3 border-solid border-1 border-gray-200 border-solid border-1 border-gray-200">
      <a href="#" id="perfume" class="hover:no-underline">
        <div class="text-gray-200 text-center bg-gray-900 p-10">
          Profumo
        </div>
      </a>
    </div>
    <div class="w-1/3 border-solid border-1 border-gray-200 border-solid border-1 border-gray-200">
      <a href="#" id="water-pump" class="hover:no-underline">
        <div class="text-gray-200 text-center bg-gray-900 p-10">
          Acqua
        </div>
      </a>
    </div>
  </div>

  <div class="flex bg-gray-200">
    <div class="w-1/2 border-solid border-1 border-gray-200 border-solid border-1 border-gray-200">
      <div id="countdownSanification">
        <div class="values"></div>
        <div>
            <button class="startButton">Start</button>
            <button class="pauseButton" >Pause</button>
            <button class="stopButton">Stop</button>
            <button class="resetButton">Reset</button>
        </div>
      </div>
      <a href="#" id="air-sanification" class="hover:no-underline">
        <div class="text-gray-200 text-center bg-gray-900 p-10">
          Sanificazione aria
        </div>
      </a>
    </div>

    <div class="w-1/2 border-solid border-1 border-gray-200 border-solid border-1 border-gray-200">
      <a href="#" id="water-sanification" class="hover:no-underline">
        <div class="text-gray-200 text-center bg-gray-900 p-10">
          Sanificazione Acqua
        </div>
      </a>
    </div>
  </div>

  <div class="flex bg-gray-200">
    <div class="flex">
      <p>Servizi </p>
    </div>
  </div>

  <div class="flex flex-wrap">
    <div class="w-1/3 border-solid border-1 border-gray-200 border-solid border-1 border-gray-200">
      <a href="#" id="light-kitchen" class="hover:no-underline">
        <div class="text-gray-200 text-center bg-gray-900 p-10">
          Cucina
        </div>
      </a>
    </div>
    <div class="w-1/3 border-solid border-1 border-gray-200 border-solid border-1 border-gray-200">
      <a href="#" id="light-dinette" class="hover:no-underline">
        <div class="text-gray-200 text-center bg-gray-900 p-10">
          Dinette
        </div>
      </a>
    </div>
    <div class="w-1/3 border-solid border-1 border-gray-200 border-solid border-1 border-gray-200">
      <a href="#" id="light-left" class="hover:no-underline">
        <div class="text-gray-200 text-center bg-gray-900 p-10">
          Laterale
        </div>
      </a>
    </div>
    <div class="w-1/3 border-solid border-1 border-gray-200 border-solid border-1 border-gray-200">
      <a href="#" id="light-back" class="hover:no-underline">
        <div class="text-gray-200 text-center bg-gray-900 p-10">
          Portellone
        </div>
      </a>
    </div>
  </div>

  <div class="flex flex-wrap">
    <div class="w-1/2 border-solid border-1 border-gray-200 border-solid border-1 border-gray-200">
      <a href="#" class="reboot-raspberry hover:no-underline">
        <div class="text-gray-200 text-center bg-gray-900 p-10">
          Reboot Rasp
        </div>
      </a>
    </div>
    <div class="w-1/2 border-solid border-1 border-gray-200 border-solid border-1 border-gray-200">
      <a href="#" class="shutdown-raspberry hover:no-underline">
        <div class="text-gray-200 text-center bg-gray-900 p-10">
          Spegni Rasp
        </div>
      </a>
    </div>
  </div>


</div>
