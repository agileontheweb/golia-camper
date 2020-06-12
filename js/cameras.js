$(document).ready(function() {
  console.log( "Init Cameras" );
  $('#camera-back').on( "click", function(event) {
    console.log("Click camera-back")
    $('.joystick-camera').toggleClass('invisible');
  });

  $('#joystick-up').on( "click", function(event) {
    moveUp();
  });

  $('#joystick-down').on( "click", function(event) {
    console.log("Move Down")
  });

  $('#joystick-right').on( "click", function(event) {
    console.log("Move right")
  });

  $('#joystick-left').on( "click", function(event) {
    console.log("Move left")
  });
});

function moveUp(){
  console.log("Move Up");
  // i = 0;
  // i++;
  // console.log(i);
  // status = i
  status = "up";

  $.ajax({
    type: "POST",
    url: "./php/camera-joypad.php",
    data: {
      'status' : status },
        dataType: "text",
        success: function(data) {
          console.log("stato: " + status);
        },
        error: function(request, status, error) {
        console.log("failed");
      }
  });
}
