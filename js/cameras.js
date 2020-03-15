$(document).ready(function() {

  console.log("Ready cameras");

  checkStatusButtons();
  getAllButtonId();

  var status_text = "";

  function checkStatusButtons(){

    $.get('txt/camera-front.txt', function(data) {
      // console.log("Camera front: " + data);
      onOff('camera-front',data)
    });

    $.get('txt/camera-back.txt', function(data) {
      // console.log("Camera back: " + data);
      onOff('camera-back',data)
    });

    $.get('txt/camera-water-discharge.txt', function(data) {
      // console.log("Camera water discharge: " +  data);
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
    console.log(id + "ONOFF :" + data)
    if(data == 'off'){
      console.log("Se data e false rimuovi classe bg green");
      $('body').find('#'+id).find('div').removeClass("bg-green-400")
      $('body').find('#'+id).find('div').addClass("bg-grey-400");
  	}else{
      console.log("Add class bg green");
      $('body').find('#'+id).find('div').addClass("bg-green-400");
  	}
  }

  $('.section-cameras a').on('click', function(event) {
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
      url: '/golia-camper/php/'+ id +'.php',
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
