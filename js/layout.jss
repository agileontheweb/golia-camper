$( document ).ready(function() {
  console.log( "ready!" );
 checkStatusButtons();
   btn12v();
});

function checkStatusButtons(){
 var dt;
 $.ajax({
      type:'get',
      url: '/cgi-bin/12v.php',
	cache: false,
      success: function(data) {
        console.log(data);
        if(data == 'off'){
        // $('.btn-12v .btn-light').addClass('off');
        }else{
         $('.btn-12v .btn-light').removeClass('off');
        }
      },
      error: function(request, status, error) {
        console.log("failed");
      }
    });
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

