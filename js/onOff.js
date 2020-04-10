function getAllButtonId(){
  console.log("controllo ID getAllButtonId");
  $( "a[id]" ).each(function() {
    path_txt = $(this).attr("id");
    path = '../txt/' + path_txt + '.txt'
  });
}

function onOff(id, data){
  console.log("Stato: " + id + " " + data);
  if(data == 'off'){
    $('body').find('#'+id).find('div').removeClass("bg-green-500");
    $('body').find('#'+id).find('div').addClass("bg-grey-400");
  }else{
    $('body').find('#'+id).find('div').addClass("bg-green-500");
  }
}

function checkPhisicalButtons(){
  console.log("PHISICAL BUTTONS");
  $.ajax({
    type: "POST",
    url: "./php/check-phisical-buttons.php"
  }).done(function( o ) {
     console.log("Push Phisical button " + o)
  });
}
