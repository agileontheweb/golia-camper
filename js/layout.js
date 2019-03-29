$( document ).ready(function() {
  console.log( "ready!" );
  temperatureRaspberry();
});


function temperatureRaspberry(){
  console.log("temperature-rasp");
  $("#temperature-cpu").load('py/monitor-temp.php');
}
