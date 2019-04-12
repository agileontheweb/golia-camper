$( document ).ready(function() {
  console.log( "ready!+o" );
   checkStatusButtons();
   btn12v();
   btnWaterPump();
});

function checkStatusButtons(){

  $('#chkToggle2').bootstrapToggle();

 $.ajax({
      type:'get',
      url: '/cgi-bin/12v.php',
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


function btn12v(){
  var status_text=String;
  console.log(status_text)

  $('#btn-12v').change(function() {
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


function btnWaterPump(){

  var status_text_pump=String;
  console.log(status_text_pump);
  console.log("pompa");

  $('#btn-water-pump').change(function() {
        if ($(this).parent().hasClass('off')){
         status_text_pump = "spegni";
        }else{
        status_text_pump = 'accendi';
        }
        $.ajax({
         type:'post',
         url: '/cgi-bin/pump.py',
         data: {
           'stat' : status_text_pump},
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
