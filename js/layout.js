$( document ).ready(function() {
  console.log( "ready!" );
  var localhost = 'http://192.168.43.202/golia-camper';
  console.log(localhost);
  temperatureRaspberry(localhost);
});


function temperatureRaspberry(localhost){
  console.log("temperature-rasp" + localhost);

  $( "#btn-raspberry-temp" ).click(function() {
        $.ajax({
        type:'get',
        url: '/cgi-bin/temperature-raspberry.py',
        cache:false,
        success: function(data) {
          console.log(data);
        },
        error: function(request, status, error) {
          console.log("failed");
        }
     });
  });

  setInterval(function(){
    $("#temperature-cpu").load(localhost + '/php/raspberry-temp.php');
  }, 1000);
}
