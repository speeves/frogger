$(document).ready(function() {
  navClick();
  modalOpen(3);
  modalClose();
});

function navClick() {
  $('#tabs nav > button').on('click', function(e) {
    $('#tabs nav > button, main > section').removeClass('active');
    $(this).addClass('active');
    let id = $(this).data('nav');
    $('#' + id).addClass('active');
  });
}

function modalOpen(offset) {
  $('.card.store').on('click', function(e) {
    $('#game .game-wrapper').append(
      '<canvas id="background-canvas" class="canvas" width="960" height="1280"></canvas><canvas id="canvas" class="canvas" width="960" height="1280"></canvas>'
    );
    window.blah.speedOffset = .1;
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "scripts/main.js";
    $("head").append(s);
    $('#game').addClass('active');
  });
}

function modalClose() {
  $('#game button.close').on('click', function(e) {
      $('#game .game-wrapper').empty();
      $('#game').removeClass('active');
  });
}
