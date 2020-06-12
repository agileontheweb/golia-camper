$(document).ready(function() {
  console.log( "Init Layout" );
  var status_text = "";
  var notice_text;
  var notice_color_status;
  var timer = new Timer();

  statusNotice();
  checkStatusServices();
  getAllButtonId();
  checkPhisicalButtons();
  door();


  function checkModal(id){
    id = $(this).attr("id");
    $("body").find(".modal").attr("id", "modal-" + id);
    $('#modal-'+id).load('./pages/_modal-'+id+'.php');
    $('#modal-'+id).modal();
    if($('#modal-air-sanification')){
      sanificationModal();
    }
  }

  function sanificationModal(){
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
    //
    $('#modal-air-sanification').on('hidden.bs.modal', function () {
      if($("body #countdownSanification").lenght > 0) {
        console.log("Si esiste");
        $('#air-sanification div').removeClass("bg-green-500");
        $('#air-sanification div').addClass("bg-orange-400");
      }else{
        console.log("Non esiste");
        console.log("Abilita pulsante");

        $('#air-sanification').removeClass('disabled');
        $('#air-sanification div').removeClass("bg-green-500");
        $('#air-sanification div').addClass("bg-gray-400");
      }
    });
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


    timer.start({countdown: true, startValues: { hours: parseInt(hh), minutes: parseInt(mm), seconds: parseInt(ss) }});

    notice_text = "Sanificazione in corso";
    notice_color_status = "bg-blue-500"
    $('#countdownSanification .values').html(timer.getTimeValues().toString());
    $('#generic-notice').show();
    $('#generic-notice').append('<div class="text-white font-bold px-4 py-2 ' + notice_color_status +'"><div>'+notice_text+'</div></div>')

    timer.addEventListener('secondsUpdated', function (e) {
      $('#countdownSanification .values').html(timer.getTimeValues().toString());
    });

    timer.addEventListener('targetAchieved', function (e) {
        $('#countdownSanification .values').html('Terminato!');
        timeisUp();
    });

    $('#countdownSanification .startButton').click(function () {
      timer.start();
    });
    $('#countdownSanification .pauseButton').click(function () {
        timer.pause();
    });
    $('#countdownSanification .stopButton').click(function () {
        timer.stop();
    });
    $('#countdownSanification .resetButton').click(function () {
        timer.reset();
    });

    function timeisUp(){
      console.log("timeisUp()");
      notice_text = "Sanificazione Completata"
      notice_color_status =  "bg-green-500";
      $('#air-sanification').removeClass('disabled');
      $('#air-sanification div').removeClass('bg-green-500');
      $('#air-sanification div').removeClass('bg-orange-400');
      $('#air-sanification div').addClass('bg-gray-400');
      statusNotice(notice_text, notice_color_status);

      $('#btn-close-notice').click(function () {
          console.log("chiudi notice");
          $(this).parent().hide();
      });
    }
  }

  $(document).on( "click", "a:not(.disabled)", function(event) {
    event.preventDefault();
    id = $(this).attr("id");
    pin = $(this).attr("data-pin");

    if(id == 'air-sanification'){
      checkModal(id);
      $('a#air-sanification').addClass('disabled');
    }

    if(id == 'lights-dinette'){
      checkModal(id);
    }

    if(id == 'lights-back'){
      checkModal(id)
    }

    if(id == 'perfume'){
      checkModal(id)
    }

    if(id == 'perfume-power'){
      console.log("Profumo power");
      perfumePower("power");
    }

    if(id == 'perfume-time'){
      console.log("Profumo time");
      perfumePower("time");
    }

    if(id == 'perfume-light'){
      console.log("Profumo time");
      perfumePower("light");
    }

    function perfumePower(status_perfume){
      console.log("lo stato del profumo e: " + status_perfume);
      $.ajax({
        type: "POST",
        url: "./php/perfume-power.php",
        data: {
          'status_perfume' : status_perfume },
            dataType: "text",
            success: function(data) {
              console.log("stato: " + status_perfume);
            },
            error: function(request, status, error) {
            console.log("failed");
          }
      });
    }

    $('#'+id).find('div').toggleClass("bg-green-500 bg-gray-400");
    if ($('#'+id).find('div').hasClass('bg-green-500')){
      status_text = "on";
    }else{
      status_text = "off";
    }

    $.ajax({
      type:'post',
      url: '/golia-camper/php/onoff.php',
      cache: 'false',
      data: {
        'status_text' : status_text, 'id': id, "data-pin": pin},
          dataType: "text",
          success: function(data) {
            console.log("stato: " + status_text, "id:" + id, "pin: " + pin);
          },
          error: function(request, status, error) {
          console.log("failed");
        }
    });
  });

});
