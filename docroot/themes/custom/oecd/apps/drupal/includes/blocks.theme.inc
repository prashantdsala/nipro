<?php

/**
 * @file
 * Functions to support theming blocks in the OECD theme.
 */

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 */
function oecd_theme_suggestions_block_alter(array &$suggestions, array $variables) {
  // Provide suggestion for block templates by custom block type.
  if (!empty($variables['elements']['content']['#block_content'])) {
    $block = $variables['elements']['content']['#block_content'];
    // Add `block--BLOCK-TYPE.html.twig`.
    $suggestions[] = 'block__' . $block->bundle();
    $view_mode = $variables['elements']['#configuration']['view_mode'];
    if (!empty($view_mode)) {
      // Add `block--BLOCK-TYPE--VIEW-MODE.html.twig`.
      $suggestions[] = 'block__' . $block->bundle() . '__' . $view_mode;
    }
  }

  // Add layout suggestion on system menu block.
  if($variables['elements']['#base_plugin_id'] == "system_menu_block" && isset($variables['elements']['#configuration']['menu_size']) && isset($variables['elements']['#configuration']['icon_type'])) {
    if(isset($variables['elements']['#configuration']['check_layout']) && $variables['elements']['#configuration']['check_layout'] == 1) {
      $suggestions[] = 'block__' . $variables['elements']['#base_plugin_id'] . '__layout';
    }
  }
}
