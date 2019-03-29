$( document ).ready(function() {
  console.log( "ready!" );
  temperatureRaspberry();
});


function temperatureRaspberry(){
  console.log("temperature-rasp");
  setInterval(function(){
    console.log("refresh temperature raspberry");
    $("#temperature-cpu").load('./php/raspberry-temp.php');
  }, 1000);
}
