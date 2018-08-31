$( document ).ready(function() {

  loadFUlstrasonicSensor();

  setInterval(function(){
     loadFile();
  }, 1000);

  function loadFile(){
    $("#temperature-cpu").load('py/monitor-temp.php');
    console.log("temperature-cpu");

  }

  function loadFUlstrasonicSensor(){
    $("#ulstrasonic-sensor").load('py/ulstrasonic-distance.php');
    console.log("ulstrasonic-sensor");
  }

});
