<?php

/**
 * @file
 * Functions to support theming navigation in the OECD theme.
 */

use Drupal\Core\Url;

/**
 * Implements hook_preprocess_breadcrumb().
 */
function oecd_preprocess_breadcrumb(&$variables) {
  if (($node = \Drupal::routeMatch()->getParameter('node')) && $variables['breadcrumb']) {
    $variables['breadcrumb'][] = [
      'text' => $node->getTitle(),
    ];
  }

  // To add breadcrumb title to view pages
  $route = \Drupal::routeMatch()->getRouteObject();
  $request = \Drupal::request();
  if ($route) {
      $view_id = $route->getDefault('view_id');
      if (!empty($view_id)) {
          $page_title = \Drupal::service('title_resolver')->getTitle($request, $route);
          $variables['breadcrumb'][] = array(
              'text' => $page_title
          );
      }
  }

  $frontpage = \Drupal::service('path.matcher')->isFrontPage();

  // Remove duplicate links from the breadcrumb trail.
  if (!empty($variables['breadcrumb'])) {
    $prev_link = NULL;

    // Loop over each link.
    foreach ($variables['breadcrumb'] as $key => $current_link) {
      if (empty($key)) {
        continue;
      }

      // Look to see if there was a previous link. If there isn't then it means
      // it was removed from the array already.
      if (isset($variables['breadcrumb'][$key - 1])) {
        $prev_link = $variables['breadcrumb'][$key - 1];
      }

      // Only proceed if a previous link was found.
      if (!empty($prev_link)) {
        // Check if the previous link's title is the same as the current link's
        // title.
        if ($prev_link['text'] == $current_link['text']) {

          // Remove the current link.
          unset($variables['breadcrumb'][$key]);
        }
      }

      //remove blank link from homepgae
      if ($frontpage && empty($variables['breadcrumb'][$key]['text'])) {
        unset($variables['breadcrumb'][$key]);
      }
    }
  }

  if($frontpage) {
    $variables['breadcrumb_homepage_option'] = !empty(theme_get_setting('breadcrumb_homepage_option'))? theme_get_setting('breadcrumb_homepage_option') : 0;
  } else {
    $variables['breadcrumb_homepage_option'] = 1;
  }

  $variables['notification_align_options'] = !empty(theme_get_setting('notification_align_options'))? theme_get_setting('notification_align_options') : 'left';
  $variables['notification_size_options'] = !empty(theme_get_setting('notification_size_options'))? theme_get_setting('notification_size_options') : 'small';
  $variables['notification_bg_options'] = !empty(theme_get_setting('notification_bg_options'))? theme_get_setting('notification_bg_options') : 'dark';
  $variables['#attached']['drupalSettings']['breadcrumb']['breadcrumb_variation_options'] = theme_get_setting('breadcrumb_variation_options');
  $variables['breadcrumb_variation_options'] = !empty(theme_get_setting('breadcrumb_variation_options'))? theme_get_setting('breadcrumb_variation_options') : 'expanded';
  $variables['breadcrumb_style_options'] = !empty(theme_get_setting('breadcrumb_style_options'))? theme_get_setting('breadcrumb_style_options') : 'primary-fill';

  // Add cache context based on url.
  $variables['#cache']['contexts'][] = 'url';
}
/**
 * Implements hook_preprocess_preprocess_links__language_block().
 *
 * The current language is not part of the block - so we add it.
 */
function oecd_preprocess_links__language_block(array &$variables) {
  $language = \Drupal::languageManager()->getCurrentLanguage()->getId();
  $variables['language'] = $language;
  foreach ($variables['links'] as $key => &$link) {
    $variables['links'][$key]["link"]["#title"] = $key;
    $link_language = $link['link']['#options']['language'];
    $path = Url::fromRoute('<current>', [], ['language' => $link_language]);
    $variables['links'][$key]['icon'] = '/themes/custom/base_theme/images/icon-flag-' . $link_language->id() . '.svg';
    $variables['links'][$key]['path'] = $path;
    $link['langcode'] = $link_language->id();
  }
  $variables['current_lang_icon']['#markup'] = '/themes/custom/base_theme/images/icon-flag-' . \Drupal::languageManager()->getCurrentLanguage()->getId() . '.svg';
}
