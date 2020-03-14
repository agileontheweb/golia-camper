$(document).ready(function() {
  console.log("Ready cameras");
  var status_text=String;

  $('a').on('click', function() {
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
           url: '/cgi-bin/camera-front.py',
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
  });
});
