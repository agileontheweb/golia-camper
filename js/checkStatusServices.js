function checkStatusServices(){
  var listButtons = ["camera-front",
                      "camera-back",
                      "camera-water-discharge",
                      "light-back",
                      "light-dinette",
                      "light-kitchen",
                      "light-left",
                      "perfume"]

  $.each( listButtons, function( key, value ) {
    $.get('txt/' + value + '.txt', function(data) {
      onOff(value,data)
    });
  });
  $('#generic-notice').hide();
}
