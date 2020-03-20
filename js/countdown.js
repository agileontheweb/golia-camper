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
