function door(){
  console.log("door");
  status_door = "open"

  $.ajax({
    type: "POST",
    url: "./php/door.php",
    data: {
      'status_door' : status_door },
        dataType: "text",
        success: function(data) {
          console.log("stato: " + status_door);
        },
        error: function(request, status, error) {
        console.log("failed");
      }
  });
}
