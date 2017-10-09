$(document).ready(function() {
  $('.nav-link.1').click(function() {
    $('html, body').animate({scrollTop: $('#about').offset().top - 80}, 1000);
  });
  $('.nav-link.2').click(function() {
    $('html, body').animate({scrollTop: $('#board').offset().top - 80}, 1000);
  });
  $('.nav-link.3').click(function() {
    $('html, body').animate({scrollTop: $('#interest-form').offset().top -80}, 1000);
  });

})
