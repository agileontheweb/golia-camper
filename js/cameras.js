$(document).ready(function() {
  console.log("Ready cameras");

  checkStatusButtons();
  getAllButtonId();

  var status_text = "";

  function checkStatusButtons(){

    $.get('txt/camera-front.txt', function(data) {
      console.log("Camera front: " + data);
      onOff('camera-front',data)
    });

    $.get('txt/camera-back.txt', function(data) {
      console.log("Camera back: " + data);
      onOff('camera-back',data)
    });

    $.get('txt/camera-water-discharge.txt', function(data) {
      console.log("Camera water discharge: " +  data);
      onOff('camera-water-discharge',data)
    });
  }

  function getAllButtonId(){
    $( "a[id]" ).each(function() {
      path_txt = $(this).attr("id");
      path = '../txt/' + path_txt + '.txt'
    });
  }

  function onOff(id, data){
    if(data == false){
      $('body').find('#'+id).find('div').removeClass("bg-green-400");
  	}else{
      $('body').find('#'+id).find('div').toggleClass("bg-green-400 bg-gray-400");
  	}
  }

  $('a').on('click', function(event) {
    event.preventDefault();
    id = $(this).attr("id");

    $('#'+id).find('div').toggleClass("bg-green-400 bg-gray-400");
    if ($('#'+id).find('div').hasClass('bg-green-400')){
  	  status_text = "on";
  	}else{
  	  status_text = "off";
  	}

    $.ajax({
      type:'post',
      url: '../php/'+ id +'.php',
      data: {
        'status_text' : status_text },
          dataType: "text",
          success: function(data) {
            console.log(status_text);
          },
          error: function(request, status, error) {
          console.log("failed");
        }
    });

  });

});
