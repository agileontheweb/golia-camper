$( document ).ready(function() {
  console.log( "ready!" );

  temperatureRaspberry();
  checkStatusButtons();
  clickButton();
});


function initMap() {
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var myOptions = {
        zoom: 8,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),
            myOptions);
}
google.maps.event.addDomListener(window, "load", initMap);


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

function weather() {
  var location = document.getElementById("location");
//  var apiKey = "c06fb76d1ceb764c7d473c771de06618";
//  var url = "https://api.forecast.io/forecast/";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
	console.log("lat" + latitude);
    location.innerHTML =
      "Latitude is " + latitude + "° Longitude is " + longitude + "°";

    $.getJSON(
      url + apiKey + "/" + latitude + "," + longitude + "?callback=?",
      function(data) {
        $("#temp").html(data.currently.temperature + "° F");
        $("#minutely").html(data.minutely.summary);
      }
    );
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }

  location.innerHTML = "Locating...";
}



function checkStatusButtons(){

  checkFile = [
             // '220v',
               //'pump',
              // 'smell-light',
              // 'table-light',
              // 'kitchen-light',
              // 'sofa-light',
              'door-back-light'
              ]

  $.each(checkFile, function(index,nameFile) {
    console.log(index,nameFile);

    $.ajax({
          type:'get',
          url: './php/' + nameFile + '.php',
          cache: false,
          success: function(data) {
            console.log("LOAD PHP FILE " + nameFile + data);
    	      on(data, nameFile);
          },
            error: function(request, status, error) {
            console.log("failed");
          }
        });
  });
}

function on(data, nameFile){
  console.log("DENTRO DATA" + " " + nameFile + " " + data);
  console.log('name button' + '#btn-' + nameFile);
  if(data.indexOf("off") > -1){
    console.log("backlightled e off");
    $('#btn-' + nameFile).bootstrapToggle('off');
  }else{
    console.log("backlightled e on");
    $('#btn-' + nameFile).bootstrapToggle('on');
  }
}


function clickButton(){
  var status_text=String;
  console.log("VAR status test: " + status_text);

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
  var status_text=String;
  status_text= 'getTemperature';
  getTemp();
  
  setInterval(function(){
    getTemp();
   }, 3000);
   
   function getTemp(){
       $.ajax({
         type:'post',
         url: '/cgi-bin/raspberry-temp.py',
	 data: {
	   'stat' : status_text
        },
         dataType: "text",
         success: function(data) {
          console.log(data);
	$('#raspberry-temperature').html(data);
         },
         error: function(request, status, error) {
          console.log("failed");
         }
      });
     }
}
