$( document ).ready(function() {

  setInterval(function(){
     loadFile();
  }, 1000);

  function loadFile(){
    console.log("ok");
    $("#temperature-cpu").load('py/monitor-temp.php');
  }

  function loadFUlstrasonicSensor(){
    $("#ulstrasonic-sensor").load('py/ulstrasonic-distance.php');
  }

});
