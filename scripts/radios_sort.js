(function ($) {
  Drupal.behaviors.PersonalityTestRadiosSort = {
    attach: function (context, settings) {
      // http://stackoverflow.com/questions/1533910/randomize-a-sequence-of-div-elements-with-jquery#11766418
      $.fn.randomize = function(selector) {
        var $elems = selector ? $(this).find(selector) : $(this).children(),
        $parents = $elems.parent();

        $parents.each(function() {
          $(this).children(selector).sort(function(){
            return Math.round(Math.random()) - 0.5;
            }).detach().appendTo(this);
        });
        return this;
      };
      // fire
      $('.form-type-radios .form-radios').randomize('.form-type-radio');
    }
  };
}) (jQuery);