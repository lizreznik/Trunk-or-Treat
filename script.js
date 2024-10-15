<<<<<<< HEAD

$(document).ready(function () {
    $('#picture img').each(function () {
        var description = $(this).data('description');

        $(this).hover(function () {
            $('<div class="description">' + description + '</div>').insertAfter($(this)).fadeIn();
        }, function () {
            $(this).next('.description').fadeOut().remove();
        });
    });
    /* event details */
    $('.toggleButton').click(function () {
        $('.hiddenContent').toggle();
    });
    /* schedule */
    $('.event-heading').on('click', function () {
        $(this).next('.event-details').slideToggle(); // Toggle the next details
    });
});
=======
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
>>>>>>> 595e1201088ef82452dfb98e5a708a7bae3a0dd0
