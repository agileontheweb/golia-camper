$( document ).ready(function() {
  console.log( "ready!" );
  temperatureRaspberry();
});


function temperatureRaspberry(){
  console.log("temperature-rasp");
  setInterval(function(){
    $("#temperature-cpu").load('http://192.168.43.202/golia-camper/php/raspberry-temp.php');
  }, 1000);
}
