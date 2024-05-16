<?php

/**
 * @file
 * Functions to support theming form layout in the OECD theme.
 */
function oecd_preprocess_form(&$variables) {
  $variables['login_variation_options'] = !empty(theme_get_setting('login_variation_options'))? theme_get_setting('login_variation_options') : 'simple-social';
  $variables['login_form_headline'] = !empty(theme_get_setting('login_form_headline'))? theme_get_setting('login_form_headline') : 'Login to your account';
  $variables['login_form_subheadline'] = !empty(theme_get_setting('login_form_subheadline'))? theme_get_setting('login_form_subheadline') : 'Start your 30-day free trial.';
  $variables['login_using_google'] = !empty(theme_get_setting('login_using_google'))? theme_get_setting('login_using_google') : 0;
  $variables['login_using_facebook'] = !empty(theme_get_setting('login_using_facebook'))? theme_get_setting('login_using_facebook') : 0;
  $variables['login_using_apple'] = !empty(theme_get_setting('login_using_apple'))? theme_get_setting('login_using_apple') : 0;
  $variables['signup_variation_options'] = !empty(theme_get_setting('signup_variation_options'))? theme_get_setting('signup_variation_options') : 'simple-social';
  $variables['signup_form_headline'] = !empty(theme_get_setting('signup_form_headline'))? theme_get_setting('signup_form_headline') : 'Create an account';
  $variables['signup_form_subheadline'] = !empty(theme_get_setting('signup_form_subheadline'))? theme_get_setting('signup_form_subheadline') : 'Start your 30-day free trial.';
  $variables['signup_using_google'] = !empty(theme_get_setting('signup_using_google'))? theme_get_setting('signup_using_google') : 0;
  $variables['signup_using_facebook'] = !empty(theme_get_setting('signup_using_facebook'))? theme_get_setting('signup_using_facebook') : 0;
  $variables['signup_using_apple'] = !empty(theme_get_setting('signup_using_apple'))? theme_get_setting('signup_using_apple') : 0;
  $variables['copyright_splitcarousel'] = !empty(theme_get_setting('copyright_splitcarousel'))? theme_get_setting('copyright_splitcarousel') : '© OECD 2022';
  $variables['splitimage_email'] = !empty(theme_get_setting('splitimage_email'))? theme_get_setting('splitimage_email') : 'help@spaceui.com';
}
