$( document ).ready(function() {
  console.log( "ready!" );
  temperatureRaspberry();
});


function temperatureRaspberry(){
  console.log("temperature-rasp");
  $("#temperature-cpu").load('./php/monitor-temp.php');
}
