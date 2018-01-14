$(document).ready(function() {
  // splash
  $('#second').toggle();
  setTimeout(function() {
    $('#first').delay().fadeOut(1000);
    $('#second').toggle();
  }, 3000);  
});