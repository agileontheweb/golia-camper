$(document).ready(function() {
  console.log( "Init Layout" );
  var status_text = "";
  var notice_text;

  statusNotice();
  checkStatusServices();
  getAllButtonId();

  function getAllButtonId(){
    $( "a[id]" ).each(function() {
      path_txt = $(this).attr("id");
      path = '../txt/' + path_txt + '.txt'
    });
  }

  function onOff(id, data){
    console.log("Stato: " + id + " " + data);

    if(data == 'off'){
      $('body').find('#'+id).find('div').removeClass("bg-green-400");
      $('body').find('#'+id).find('div').addClass("bg-grey-400");
  	}else{
      $('body').find('#'+id).find('div').addClass("bg-green-400");
  	}
  }

  $(document).on( "click", "a:not(.disabled)", function(event) {
    event.preventDefault();
    id = $(this).attr("id");

    if(id == 'air-sanification'){
      sanificationModal();
      $('a#air-sanification').addClass('disabled');
      console.log("disabilita pulante");
    }

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
    $('#generic-notice').hide();
  }

  function statusNotice(notice_text){
    console.log("ricevo: "  + notice_text);

    if ($('#generic-notice').is(':empty')){
      $('#generic-notice').hide();
      console.log("Notice vuoto");
    }else if(notice_text == "Sanificazione Completata"){
      console.log("Sanificazione Completata");
      $('#generic-notice > div').remove();
      $('#generic-notice').append('<div class="bg-green-500 text-white font-bold rounded-t px-4 py-2">'+notice_text+'</div>');
    }
    else{
      console.log("Messaggio notice di default");
    }
    $('#generic-notice').show();

  }

  function sanificationModal(){
    $('#modal-air-sanification').modal();
    $('#modal-air-sanification').on('shown.bs.modal', function () {
      var timer;
      timer = $("select.sanification-timer").children("option:selected").val();
      console.log("Timer default: " + timer);
      $("select.sanification-timer").change(function(){
        timer = $(this).children("option:selected").val();
        console.log("Il timer impostato è di  " + timer);
      });

      $('.modal-footer #btn-confirm').on('click', function(event) {
        $('#modal-air-sanification').modal('toggle');
        $.ajax({
          type:'post',
          url: '/golia-camper/php/air-sanification.php',
          cache: 'false',
          data: {
            'timer' : timer},
              dataType: "text",
              success: function(data) {
                console.log(timer);
              },
              error: function(request, status, error) {
              console.log("failed");
            }
        });
        var separateTime = timer;
        console.log("separateTime: " + separateTime);
        hours = separateTime.split(':')[0];
        minutes = separateTime.split(':')[1];
        seconds = separateTime.split(':')[2];
        console.log("i secondi" + seconds);
        countdown(hours,minutes,seconds);
      });
    })
  }

  function countdown(hours,minutes,seconds){
    var hms = hours + ':' + minutes + ':' + seconds;
    var a = hms.split(':');
    var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
    var newSeconds= 3*seconds;

    var date = new Date(newSeconds * 1000);
    var hh = date.getUTCHours();
    var mm = date.getUTCMinutes();
    var ss = date.getSeconds();

    if (hh < 10) {hh = "0"+hh;}
    if (mm < 10) {mm = "0"+mm;}
    if (ss < 10) {ss = "0"+ss;}
    var t = hh+":"+mm+":"+ss;
    //

    $('#clock').countdown("2020/03/19 01:00:30", function(event) {
     $('.hours').html(event.strftime('%H'));
     $('.minutes').html(event.strftime('%M'));
     $('.seconds').html(event.strftime('%S'));
   });


    // $('#clock').countdown('2020/10/10', function(event) {
    //   $(this).html(event.strftime('%H:%M:%S'));
    // });
    notice_text = "Sanificazione in corso";
    // $('#generic-notice').append('<div class="bg-red-500 text-white font-bold rounded-t px-4 py-2"><div id="given_date">'+notice_text+'<span class="time">'+t+'</span></div></div>')
    // $('#generic-notice').append('<div class="bg-blue-500 text-white font-bold px-4 py-2"><div>'+notice_text+'</div></div>')
    // $('#generic-notice').show();

    // $("#m_timer").countdowntimer({
    //       size : "xs",
    //       hours : 00,
    //       minutes : 00,
    //       seconds : 03,
    //       stopButton : "stopBtnhms",
    //       timeUp : timeisUp
  	// });

    // var date = new Date(newSeconds * 1000);
    // var hh = date.getUTCHours();
    // var mm = date.getUTCMinutes();
    // var ss = date.getSeconds();


  }

  function timeisUp(){
    console.log("timeisUp()");
    notice_text = "Sanificazione Completata" ;
    statusNotice(notice_text);
    $('#air-sanification div').toggleClass("bg-orange-400 bg-gray-400");
    $('#air-sanification').removeClass('disabled');
    $("#destroyBtn").trigger("click");

    // $('#air-sanification div').removeClass("bg-green-400");
    // $('#air-sanification div').addClass("bg-orange-400");
    // $("#destroyBtn").show();
  }

  // $("#destroyBtn").hide();
  $("#destroyBtn").click(function() {
    // $(this).hide();
    console.log("auto click destroyBtn");
    $('#generic-notice div').remove();
    $("#m_timer").countdowntimer("destroy");
    // $("#given_date .time").countdowntimer("destroy");
    $('#air-sanification').removeClass("disabled ");
    $('#air-sanification div').removeClass("bg-orange-400");
    $('#air-sanification div').addClass("bg-gray-400");
  });




});
