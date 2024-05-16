/**
 * Sticky jump link JS
 */

(function stickyJumpLinkContentComp($, Drupal) {
  /* eslint-disable */
  Drupal.behaviors.stickyJumpLinkContent = {
    attach() {
      $('.sticky-tag-pills').on('click', function (event) {
        // prevent the default behavior of scrolling the body
        event.preventDefault();
        event.stopImmediatePropagation();

        // get the target section ID from the href attribute
        var target = $(this).attr('href');

        // scroll to the target section within the container element
        $('.sticky-jump-link-row-inner').animate({
          scrollTop: $(target).offset().top - $('.sticky-jump-link-row-inner').offset().top + $('.sticky-jump-link-row-inner').scrollTop()
        }, 600);
      });

      $('.sticky-jump-link-row-inner').on('scroll', function () {
        $('.sticky-jump-link-item').each(function () {
          var sectionTop = $(this).find('.item-in').offset().top - $('.sticky-jump-link-row-inner').offset().top + $('.sticky-jump-link-row-inner').scrollTop();
          var sectionBottom = sectionTop + $(this).find('.item-in').outerHeight() / 2;
          var containerTop = $('.sticky-jump-link-row-inner').scrollTop();
          var containerBottom = containerTop + $('.sticky-jump-link-row-inner').outerHeight() / 2;

          if (sectionTop < containerBottom && sectionBottom > containerTop) {
            $(this).addClass('active').siblings().removeClass('active');

            if ($(window).width() >= 1024) {
              $(this)
                .find('.content-inner')
                .fadeIn(500);
            }

            const itemIndex = $(this).index();
            $('.sticky-tag-pills').each(function () {
              const pillsIndex = $(this).index();

              if (itemIndex === pillsIndex) {
                $(this).addClass('active');
              } else {
                $(this).removeClass('active');
              }
            });
          } else {
            $(this).removeClass('active');

            if ($(window).width() >= 1024) {
              $(this)
                .find('.content-inner')
                .fadeOut(500);
            }
          }
        });
      });
    },
  };
})(jQuery, Drupal);
