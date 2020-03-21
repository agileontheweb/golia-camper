function statusNotice(notice_text, notice_color_status){
  console.log("Ricevo: "  + notice_text + notice_color_status);
  if ($('#generic-notice').is(':empty')){
    $('#generic-notice').hide();
    console.log("Notice vuoto");
  }else if(notice_text == "Sanificazione Completata"){
    console.log("Sanificazione Completata");
    $('#generic-notice > div').remove();
    $('#generic-notice').append('<div class="bg-green-500 text-white font-bold rounded-t px-4 py-2">' + notice_text + '<span id="btn-close-notice" class="absolute top-0 bottom-0 right-0 px-4 py-2"><svg class="fill-current h-6 w-6 text-white-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg></span></div>');
  }
  else{
    console.log("Messaggio notice di default");
  }
  $('#generic-notice').show();
}
