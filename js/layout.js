$( document ).ready(function() {
  console.log( "ready!" );
  // $("#raspberry-temperature").load('http://localhost:8888/golia-camper/txt/raspberry-temp.txt');
  // temperatureRaspberry();
  btn12v();
   btnDoorBackLight();

});

function btnDoorBackLight(){
  var status_text=String;
  console.log(status_text)

  $('#btn-doorback-light').change(function() {
	if ($(this).parent().hasClass('off')){
	 status_text = "spegni";
	}else{
	status_text = 'accendi';
	}
	$.ajax({
         type:'post',
         url: '/cgi-bin/12v.py',
	 data: {
	   'stat' : status_text},
         dataType: "text",
         success: function(data) {
          console.log(data);
         },
         error: function(request, status, error) {
          console.log("failed");
         }
      });
  });
}


function btn12v(){
  $('#btn-12v').change(function() {

    param1Data = "nada";

    if( $(this).closest('.btn').hasClass('off') ){
      console.log("chiamo una definziione nel pyton")
      param1Data = param1Data;
    }else{
      param1Data = ''
    }

    $.ajax({
      type:'get',
      url: '/cgi-bin/pytest.py',
      success: function(data) {
        console.log(data);
      },
      error: function(request, status, error) {
        console.log("failed");
      }
    });

  })
}

function temperatureRaspberry(){

  $( "#btn-raspberry-temp" ).click(function() {

        $.ajax({
        type:'get',
        url: '/cgi-bin/pytest.py',
        cache:false,
        success: function(data) {
          console.log(data);
        },
        error: function(request, status, error) {
          console.log("failed");
        }
     });
  });
}
