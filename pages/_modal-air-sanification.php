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
