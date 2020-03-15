$( document ).ready(function() {
  topButton();
  pauseAudio();
});

function topButton(){
  var radio = '';
  $( ".btn-kind" ).click(function(e) {

    console.log("genere");
    emptyList();
    loadTypeOfMuisc();
  });
  $( ".btn-italian-radio" ).click(function() {
    console.log("italiane");
    emptyList();
    radio = 'italian'
    loadRadio(radio);
  });
  $( ".btn-foreign" ).click(function() {
    console.log("straniere");
    emptyList();
    radio = 'foreign'
    loadRadio(radio);
  });
}

function emptyList(){
  console.log("empty list");
  $('.list ul li').remove();
}

function loadTypeOfMuisc(){
  (function() {
    var typeOfMusic = 'js/json/category.json';
    $.getJSON( typeOfMusic, {
      tags: "mount rainier",
      tagmode: "any",
      format: "json"
    }).done(function( data ) {
        console.log(data);
        $.each(data.typeOfMusic, function (index, value) {
          $('.list ul').append('<li class="list-group-item py-3 border font-bold btn-'+ value.name.toLowerCase() +'" data-url="'+ value.name.toLowerCase() +'">' + value.name +' </li>');
        });

        $('.list ul .list-group-item').click(function(e) {
          $('.list-group-item').removeClass('active');
          $(this).addClass('active');
          radio = $(this).data("url");
          console.log(radio);
          $('.list ul li').remove();
          loadRadio(radio);
        });
      });
  })();
}

function loadRadio(radio){
  (function() {
    var radioList = "js/json/" + radio + '.json';

    $.getJSON( radioList, {
      tags: "mount rainier",
      tagmode: "any",
      format: "json"
    }).done(function( data ) {
        $.each(data, function (index, value) {
          for (x in value) {
            name = value[x].name
            url = value[x].url
            // console.log("radio name:" + name);
            // console.log(url);
            $('.list ul').append('<li class="py-3 border font-bold list-group-item btn-'+ name +'" data-url="'+ url +'" data-name="'+ name +'">' + name + '<i class="mr-3 fas fa-play float-right"></i></li>');
          }
        });
        addClick();
      });
  })();
}

function addClick(){
  $('.list-group-item').click(function(e) {
    radioName = $(this).data("name");
    $('.radioActive').html(radioName);
    console.log("questo e il nome della radio attiva:" + radioName)
    $('.list-group-item').removeClass('active');
    $(this).data("url");
    $(this).addClass('active');
    src = $(this).data("url");
    console.log(src);
    $('#playerAudio').attr("src",src)
    $('.btn-pause i').toggleClass('fa-play-circle fa-stop-circle');
    checkIcon();
  });
}

function pauseAudio(){
  var playerAudio = document.getElementById("playerAudio");
  $('.btn-pause').click(function(e) {
    $('.btn-pause i').toggleClass('fa-play-circle fa-stop-circle');
    checkIcon();
  });
}

function checkIcon(){
  if($('.btn-pause i').hasClass('fa-stop-circle')){
    playerAudio.pause();
  }else{
    playerAudio.play();
  }
}
