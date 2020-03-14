$(document).ready(function() {
  console.log("Ready cameras");
  var status_text = String;

  checkStatusButtons();
  getAllButtonId();

  function checkStatusButtons(){

    $.get('../txt/camera-front.txt', function(data) {
      console.log(data);
      onOff('camera-front',data)
    });

    $.get('../txt/camera-back.txt', function(data) {
      console.log(data);
      onOff('camera-back',data)
    });

    $.get('../txt/camera-water-discharge.txt', function(data) {
      console.log(data);
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
    if(data == "spento"){
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
  	  status_text = "acceso";
  	}else{
  	  status_text = 'spento';
  	}
    console.log(status_text)

    $.ajax({
          type:'post',
          url: '../php/'+ id +'.php',
  	      data: {
  	        'status_text' : status_text },
              dataType: "text",
              success: function(data) {
                console.log(data);
              },
              error: function(request, status, error) {
              console.log("failed");
            }
    });
  });

});