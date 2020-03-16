$(document).ready(function() {
  console.log("Init Raspberry")
  initAnalogicShutDownRaspberry();
  
  $('.reboot-raspberry').click(function() {
    console.log("Reboot Raspberry");
    rebootRaspberry()
  });

  $('.shutdown-raspberry').on('click', function(event) {
    console.log("Shutdown Raspberry");
    shutdownRaspberry();
  });

  function rebootRaspberry(){
    $.ajax({
      type: "POST",
      url: "./py/reboot-raspberry.py"
    }).done(function( o ) {
       console.log("Init Reboot Raspberry " + o)
    });
  }

  function shutdownRaspberry(){
    $.ajax({
      type: "POST",
      url: "./py/shutdown-raspberry.py"
    }).done(function( o ) {
       console.log("Init shutdown Raspberry " + o)
    });
  }

  function initAnalogicShutDownRaspberry(){
    $.ajax({
      type: "POST",
      url: "./py/analogic-shutdown-raspberry.py"
    }).done(function( o ) {
       console.log("Init analogic shutdown button Raspberry")
    });
  }
});
