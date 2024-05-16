/**
 * Notification Banner JS
 */

(function notificationComp($, Drupal) {
  Drupal.behaviors.notification = {
    attach() {
      $('.notification_wrapper .close').on('click', function closeNotification() {
        $(this)
          .parents('.notification_wrapper')
          .fadeOut('slow');
      });
    },
  };
})(jQuery, Drupal);
