/**
 * Modal JS
 */

(function modalComp($, Drupal) {
  Drupal.behaviors.modal = {
    attach() {
      $('li :checkbox').on('click', function selectplan() {
        $(this)
          .parent()
          .parent()
          .toggleClass('bg-primary-100 checked');
      });
    },
  };
})(jQuery, Drupal);
