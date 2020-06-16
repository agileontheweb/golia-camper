$(document).ready(function() {
  console.log("Init Raspberry")
  // initAnalogicShutDownRaspberry();

  // setInterval(function() {
    //   tempRaspberry();
  // },1000);


window.setInterval(function(){
//  checkStatusBS();
}, 2000);

function checkStatusBS(){
     console.log("checkStatusBS");
    $.ajax({
      type: "POST",
      url: "./txt/statusBS.txt"
    }).done(function( o ) {
      console.log("STATUSTXT:" + o);
      $('body').find('.status-bs').html(o);
     });
  }

  statusBS();

  function statusBS(){
    console.log("STATUS SERVICES BATTERY: ");
    $.ajax({
      type: "POST",
      url: "./py/statusBS.py"
    }).done(function( o ) {
      console.log("lunch python check status battery" + o);
   });
  }

  function tempRaspberry(){
     $.ajax({
       type: "POST",
       url: "./php/temp-raspberry.php"
     }).done(function( o ) {
      $('body').find('.rasp-temperature').html(o);
      });
  }

  $('.reboot-raspberry').click(function() {
    console.log("Reboot Raspberry");
    rebootRaspberry()
  });
  //
  $('.shutdown-raspberry').on('click', function(event) {
    console.log("Shutdown Raspberry");
    shutdownRaspberry();
  });

  function rebootRaspberry(){
	console.log("DAI FAI IL reboot")
    $.ajax({
      type: "POST",
      url: "./php/reboot-raspberry.php"
    }).done(function( o ) {
       console.log("Init Reboot Raspberry " + o)
    });
  }
  //
  function shutdownRaspberry(){
    $.ajax({
      type: "POST",
      url: "./py/shutdown-raspberry.py"
    }).done(function( o ) {
       console.log("Init shutdown Raspberry " + o)
    });
  }

  // function initAnalogicShutDownRaspberry(){
  //   $.ajax({
  //     type: "POST",
  //     url: "./php/shutdown-raspberry.py"
  //   }).done(function( o ) {
  //      console.log("Init analogic shutdown button Raspberry")
  //   });
  // }

});
