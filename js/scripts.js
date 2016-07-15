$(document).ready(function() {
  navClick();
  modalOpen(3);
  modalClose();
});

function navClick() {
  $('#tabs nav > button').on('click', function(e) {
    // remove active class from all sections
    $('#tabs nav > button, main > section').removeClass('active');
    // add active class to clicked button
    $(this).addClass('active');
    // add active class to section identified in button
    let id = $(this).data('nav');
    $('#' + id).addClass('active');
  });
}

function modalOpen(offset) {
  $('.card.store').on('click', function(e) {
    // get projected people for this location and this time interval
    window.blah.projectedPeople = $(this).find('span').text();
    // set speed offset for game based on projected people
    // higher difficulty makes all cases easier
    let difficulty = 7;
    window.blah.speedOffset = window.blah.projectedPeople/difficulty;
    // load game script
    let s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "scripts/main.js";
    $("head").append(s);
    // open modal
    $('#game').addClass('active');
  });
}

function modalClose() {
  $('#game button.close').on('click', function(e) {
    // fake modal close and reload the page to reset game
    location.reload();
  });
}
