$( document ).ready(function() {
  console.log( "ready!" );
  temperatureRaspberry();
});


function temperatureRaspberry(){
  console.log("temperature-rasp");

  $( "#btn-raspberry-temp" ).click(function() {
        $.ajax({
        type:'get',
        url: 'http://192.168.43.202/cgi-bin/pytest.py',
        cache:false,
        success: function(data) {
          console.log(data);
        },
        error: function(request, status, error) {
          console.log("failed");
        }
     });

  });

//  setInterval(function(){
  //  $("#temperature-cpu").load('http://192.168.43.202/golia-camper/php/raspberry-temp.php');
 // }, 1000);
}
