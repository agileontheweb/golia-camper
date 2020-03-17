$(document).ready(function() {
  console.log( "Init Layout" );
  var status_text = "";
  checkStatusServices();
  getAllButtonId();

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
      url: '/golia-camper/php/onoff.php',
      cache: 'false',
      data: {
        'status_text' : status_text, 'id': id},
          dataType: "text",
          success: function(data) {
            console.log(status_text, id);
          },
          error: function(request, status, error) {
          console.log("failed");
        }
    });
  });

  function checkStatusServices(){
    var listButtons = ["camera-front",
                        "camera-back",
                        "camera-water-discharge",
                        "light-back",
                        "light-dinette",
                        "light-kitchen",
                        "light-left",
                        "perfume"]

    $.each( listButtons, function( key, value ) {
      $.get('txt/' + value + '.txt', function(data) {
        onOff(value,data)
      });
    });
  }

});
