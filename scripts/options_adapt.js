(function ($) {
  Drupal.behaviors.PersonalityTestOptionsAdapt = {
    attach: function (context, settings) {
      $('.field-name-personality-test-answer-map').each(
        function() {
          console.log('Hallo Welt');
        }
      )
    }
  };
}) (jQuery);