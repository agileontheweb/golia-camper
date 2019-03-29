$( document ).ready(function() {
  console.log( "ready!" );
  temperatureRaspberry();
});


function temperatureRaspberry(){
  console.log("temperature-rasp");

  $( "#btn-raspberry-temp" ).click(function() {
        $.ajax({
        type:'get',
        url: '/cgi-bin/pytest.py',
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
    $("#temperature-cpu").load('../php/raspberry-temp.php');
  }, 1000);
}
