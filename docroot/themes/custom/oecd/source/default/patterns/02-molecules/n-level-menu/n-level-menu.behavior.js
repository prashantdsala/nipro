/**
 * nlevelmenu JS
 */

/* eslint-disable */
(function nLevelMenuComp($, Drupal) {
  Drupal.behaviors.myModule = {
    attach: function (context, settings) {
      const clickHover = settings.click;

      function menuJS() {
        if (window.matchMedia("(min-width: 1024px)").matches) {
          // Hover
          if(clickHover == 'mouseenter') {
            $('.n-level .li-menu.haschild', context)
            .on('mouseenter', function () {
              $(this).addClass("expand");
            })
            .on('mouseleave', function () {
              if ($(this).hasClass("expand")) {
                $(this).removeClass("expand");
              }
            });
          } else {
            // Click
              $('.n-level .li-menu.haschild', context).on('click.once', function (e) {
              e.stopPropagation();
              e.preventDefault();
              $(this).closest('.n-level').find('.li-menu.haschild.expand').not(this).removeClass('expand');
              if ($(this).hasClass('expand')) {
                $(this).removeClass('expand');
              } else {
                $(this).addClass('expand');
              }
            });
          }
        } else {
          // For mobile screen only click is there.
          $('.n-level .li-menu.haschild').on('click', function(e) {
            e.stopPropagation();
            $(this).closest('.n-level').find('.n-level .li-menu.haschild.expand').not(this).removeClass('expand');
            if ($(this).hasClass('expand')) {
              $(this).next('.n-level').slideUp();
              $(this).removeClass('expand');
            } else {
              $(this).addClass('expand');
              $(this).next('.n-level').slideDown();
            }
          });
        }
      }
    menuJS();
    }
  };
})(jQuery, Drupal);
