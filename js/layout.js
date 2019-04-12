$( document ).ready(function() {
  console.log( "ready!" );
  // $("#raspberry-temperature").load('http://localhost:8888/golia-camper/txt/raspberry-temp.txt');
  // temperatureRaspberry();
  checkStatusButtons();
  clickButton();

});

function checkStatusButtons(){
  array = ['btn-220.php','btn-pump.php'];

  $('#chkToggle2').bootstrapToggle();

  $.ajax({
        type:'get',
        url: '/cgi-bin/' + array,
        cache: false,
        success: function(data) {
          console.log(data);
  	      on(data);
        },
          error: function(request, status, error) {
          console.log("failed");
        }
      });
}

function on(data){
  console.log("fuori" + data);

  if(data.indexOf("off") > -1){
   console.log("si e off");
   $('#chkToggle2').bootstrapToggle('off');
  }else{
$('#chkToggle2').bootstrapToggle('on');
    console.log("si e on");
  }
}


function clickButton(){
  var status_text=String;
  console.log(status_text)

  $('input').change(function(event) {

  idBtn = event.target.id
  console.log(idBtn);
  pythonfile = '/cgi-bin/' + idBtn + '.py';
  console.log(pythonfile);

  if ($(this).parent().hasClass('off')){
	 status_text = "spegni";
	}else{
	   status_text = 'accendi';
	}

  $.ajax({
         type:'post',
         url: pythonfile,
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
