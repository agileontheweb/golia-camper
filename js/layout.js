$( document ).ready(function() {
  console.log( "ready!" );
  temperatureRaspberry();
  var localhost = 'http://192.168.43.202/golia-camper';
  console.log(localhost);
});


function temperatureRaspberry(){
  console.log("temperature-rasp");

  $( "#btn-raspberry-temp" ).click(function() {
        $.ajax({
        type:'get',
        url: localhost + '/cgi-bin/temperature-raspberry.py',
        cache:false,
        success: function(data) {
          console.log(data);
          setInterval(function(){
            $("#temperature-cpu").load(localhost + '/golia-camper/php/raspberry-temp.php');
          }, 1000);
        },
        error: function(request, status, error) {
          console.log("failed");
        }
     });
  });
}
