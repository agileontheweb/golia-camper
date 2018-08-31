$( document ).ready(function() {

  $.ajax({
    type: "POST",
    url: "monitor-temp.py",
    data: { param: " "},
    dataType: "text"
    }).done(function( o ) {
        alert("OK");
  });

  loadFUlstrasonicSensor();

  setInterval(function(){
     loadFile();
  }, 1000);

  function loadFile(){
    $("#temperature-cpu").load('py/monitor-temp.php');
    console.log("temperature-cpu");

  }

  function loadFUlstrasonicSensor(){
    $("#ulstrasonic-sensor").load('py/ultrasonic-distance.php');
    console.log("ulstrasonic-sensor");
  }

});
