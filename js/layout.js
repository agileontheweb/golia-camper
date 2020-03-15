$(document).ready(function() {
  console.log( "ready Home" );
  initAnalogicShutDownRaspberry();

  function initAnalogicShutDownRaspberry(){
    console.log("Init Analogic Button Shutdown Raspberry");
    $.ajax({
      type: "POST",
      url: "./py/analogic-shutdown-raspberry.py"
    }).done(function( o ) {
       console.log("PY: rebbot raspbaerry " + o)
    });
  }

  $('.reboot-raspberry').click(function() {
    console.log("Reboot Raspberry");
    rebootRaspberry()
  });

  function rebootRaspberry(){
    $.ajax({
      type: "POST",
      url: "./py/reboot-raspberry.py"
    }).done(function( o ) {
       console.log("PY: rebbot raspbaerry " + o)
    });
  }

  function shutdownRaspberry(){
    $.ajax({
      type: "POST",
      url: "./py/shutdown-raspberry.py"
    }).done(function( o ) {
       console.log("PY: rebbot raspbaerry " + o)
    });
  }

  $('.shutdown-raspberry').on('click', function(event) {
    console.log("Shutdown Raspberry");
    shutdownRaspberry();
  });


  
});
