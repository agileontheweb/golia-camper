function checkStatusServices(){
  var listButtons = ["camera-front",
                    "camera-back",
                    "camera-water-discharge",
                    "light-back",
                    "light-dinette",
                    "light-kitchen",
                    "light-left",
                    "perfume"]

  $.each( listButtons, function( key, id ) {
    $.get('txt/' + id + '.txt', function(data) {

      status_text = data;
      console.log("init checkStatusServices: " + status_text);

      $.ajax({
        type:'post',
        url: '/golia-camper/php/onoff.php',
        cache: 'false',
        data: {
          'status_text' : status_text, 'id': id},
          dataType: "text",
          success: function(data) {
            console.log(data, id);
          },
          error: function(request, status, error) {
          console.log("failed");
        }
      });

      onOff(id,data);
    });

  });
  $('#generic-notice').hide();
}

