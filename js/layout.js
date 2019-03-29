$( document ).ready(function() {
  console.log( "ready!" );
  temperatureRaspberry();
});


function temperatureRaspberry(){
  console.log("temperature-rasp");
  setInterval(function(){
    $("#temperature-cpu").load('../php/raspberry-temp.php');
  }, 1000);
}
