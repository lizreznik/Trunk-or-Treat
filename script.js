$(document).ready(function() {
    $('#picture img').each(function() {
      var description = $(this).data('description'); 
  
      $(this).hover(function() {
        $('<div class="description">' + description + '</div>').insertAfter($(this)).fadeIn();
      }, function() {
        $(this).next('.description').fadeOut().remove();
      });
    });
    $('.toggleButton').click(function() {
        $('.hiddenContent').toggle();
      });
  });
