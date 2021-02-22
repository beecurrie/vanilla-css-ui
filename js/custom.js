// All Custom Javascript

// Pseudo Code Steps
// 1. Set a click event on the mobile menu Icon
// 2. Once clicked demonstrate jQuery chaining
// 3. Finally demonstrate jQuery callback functions

$('document').ready(function(){

// Select the mobile menu, create a click event to trigger an alert
  $('.fa-bars').click(function(){
    // Below is an example of chaining
      // $('.daily-section').fadeOut(3000).hide(3000).show(3000);

      $('.daily-section').hide(3000, function(){
        $('.map-section').hide(3000, function(){
          $('.favourite-section').hide(3000, function(){
            $('.footer-section').hide(3000);
          });
        });
      });
    });

});
