$( document ).ready(function() {
  console.log( "ready!" );
  temperatureRaspberry();
});


function temperatureRaspberry(){
  console.log("temperature-rasp");
  setInterval(function(){
    $("#temperature-cpu").load('../php/monitor-temp.php');
  }, 1000);
}
