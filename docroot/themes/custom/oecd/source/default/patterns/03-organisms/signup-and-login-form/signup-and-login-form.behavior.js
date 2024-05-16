/**
 * Signup and Login JS
 */

(function signUpLoginComp($, Drupal) {
  Drupal.behaviors.signUpLogin = {
    attach(context) {
      // To fix accessibility bug
      $(
        '.simplelogin-form, .simple-signup-form, .simple-and-social-login-form, .simple-and-social-signup-form, .user-pass'
      )
        .find('.actions-suffix > a, .back-to-login > a', context)
        .attr({
          'aria-label': 'Register',
          tabindex: '-1',
        });
    },
  };
})(jQuery, Drupal);
