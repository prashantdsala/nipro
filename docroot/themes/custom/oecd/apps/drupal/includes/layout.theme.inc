<?php

/**
 * @file
 * Functions to support theming page layout in the OECD theme.
 */

/**
 * Implements hook_preprocess_HOOK().
 */
function oecd_preprocess_page(&$variables) {
  $moduleHandler = \Drupal::service('module_handler');
  if ($moduleHandler->moduleExists('components')) {
    $variables['has_components_module'] = TRUE;
    $variables['footer_type'] = !empty(theme_get_setting('footer_type'))? theme_get_setting('footer_type') : 'type-5';
    $variables['colour'] = !empty(theme_get_setting('colour'))? theme_get_setting('colour') : 'white';
    $variables['header_navigation_type'] = !empty(theme_get_setting('header_navigation_type'))? theme_get_setting('header_navigation_type') : 'search_and_cta';
    $variables['header_position'] = !empty(theme_get_setting('header_position'))? theme_get_setting('header_position') : 'left';
    $variables['secondary_header_position'] = !empty(theme_get_setting('secondary_header_position'))? theme_get_setting('secondary_header_position') : 'left';
  }

  if (space_is_layout_builder()) {
    $variables['is_layout_builder'] = TRUE;
  } else {
    $variables['is_layout_builder'] = FALSE;
  }

  $variables['header_has_spacer'] = TRUE;

  // Pass welcome text variable to page template
  $variables['site_welcome_text']  = !empty(theme_get_setting('site_welcome_text'))? theme_get_setting('site_welcome_text') : 'Welcome to the OECD';
}
