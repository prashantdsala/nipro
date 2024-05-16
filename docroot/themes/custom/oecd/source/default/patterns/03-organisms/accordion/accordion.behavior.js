/**
 * Accordion JS
 */

(function accordionComp($, Drupal) {
  Drupal.behaviors.accordion = {
    attach(context) {
      $('.accordion:not(.accordion-with-image-item) .accordion-item-inner .ac-title', context).on(
        'click',
        /* eslint-disable */
        function (e) {
          e.preventDefault();

          const $this = $(this);

          if ($this.parent('.accordion-item-inner').hasClass('opened')) {
            $this
              .parent('.accordion-item-inner')
              .removeClass('opened')
              .addClass('closed');
            $(this)
              .find('.ac-accessibilty-txt')
              .text('click to close accordion');
          } else {
            $(this)
              .closest('.accordion-item')
              .siblings()
              .find('.accordion-item-inner')
              .removeClass('opened')
              .addClass('closed');
            $this.parent('.accordion-item-inner').toggleClass('opened');
            $(this)
              .find('.ac-accessibilty-txt')
              .text('click to open accordion');
          }
        }
      );
    },
  };
})(jQuery, Drupal);
