/**
 * Accordion with image JS
 */

(function accordionWithImageComp($, Drupal) {
  Drupal.behaviors.accordionWithImage = {
    attach(context) {
      /* eslint-disable */
      $('.accordion-with-image').each(function () {
        $(this)
          .find('.accordion-item')
          .first()
          .find('.accordion-item-inner')
          .addClass('opened');
      });

      $(".accordion-with-image:not('.variation-4') .accordion-item-inner .ac-title", context).on(
        'click',
        function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();

          $(this)
            .parent('.accordion-item-inner')
            .addClass('opened')
            .removeClass('closed');
          $(this)
            .closest('.accordion-item')
            .siblings()
            .find('.accordion-item-inner')
            .removeClass('opened')
            .addClass('closed');

          if (
            $(this)
              .closest('.accordion-item-inner')
              .hasClass('opened')
          ) {
            $(this)
              .find('.ac-accessibilty-txt')
              .text('click to close accordion');
          } else {
            $(this)
              .find('.ac-accessibilty-txt')
              .text('click to open accordion');
          }
        }
      );

      // Variation 1.2
      $('.accordion-with-image.variation-1-2 .accordion-item-inner', context).on('click', function (
        e
      ) {
        e.preventDefault();
        e.stopImmediatePropagation();

        $(this)
          .addClass('opened')
          .removeClass('closed');
        $(this)
          .closest('.accordion-item')
          .siblings()
          .find('.accordion-item-inner')
          .removeClass('opened')
          .addClass('closed');

        if (
          $(this)
            .closest('.accordion-item-inner')
            .hasClass('opened')
        ) {
          $(this)
            .find('.ac-accessibilty-txt')
            .text('click to close accordion');
        } else {
          $(this)
            .find('.ac-accessibilty-txt')
            .text('click to open accordion');
        }
      });

      $(window)
        .on('resize', function () {
          if ($(window).width() > 1024) {
            // Variation 4 - Coverflow
            const initImage = 1;
            const imageTotal = $('.coverflow-items .c-image').length;

            function changeImage(number) {
              $(`.c-image[data-image=${number}], .c-image[data-image=${number}] img`).removeAttr(
                'style'
              );
              for (var i = 1; i <= imageTotal - number; i++) {
                $(`.c-image[data-image=${number + i}] img`).css(
                  'transform',
                  `perspective(500px) translate3d(${15 * i}%, 0, -${25 * i}px)`
                );
                $(`.c-image[data-image=${number + i}]`).css('z-index', `-${i}`);
              }
              for (var i = -1; i >= -number + 1; i--) {
                $(`.c-image[data-image=${number + i}] img`).css(
                  'transform',
                  `perspective(500px) translate3d(${15 * i}%, 0, ${25 * i}px)`
                );
                $(`.c-image[data-image=${number + i}]`).css('z-index', i);
              }

              let currentImage;
              if (number < 1) {
                currentImage = 1;
              } else if (number > imageTotal) {
                currentImage = imageTotal;
              } else {
                currentImage = number;
              }
            }

            $('.coverflow-items .c-image')
              .first()
              .addClass('active-image');
            $('.accordion-with-image.variation-4 .accordion-item-inner .ac-title', context).on(
              'click',
              function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();

                $(this)
                  .parent('.accordion-item-inner')
                  .addClass('opened')
                  .removeClass('closed');
                $(this)
                  .closest('.accordion-item')
                  .siblings()
                  .find('.accordion-item-inner')
                  .removeClass('opened')
                  .addClass('closed');

                if (
                  $(this)
                    .closest('.accordion-item-inner')
                    .hasClass('opened')
                ) {
                  $(this)
                    .find('.ac-accessibilty-txt')
                    .text('click to close accordion');
                } else {
                  $(this)
                    .find('.ac-accessibilty-txt')
                    .text('click to open accordion');
                }

                const liEl = $(e.target).closest('.accordion-item');
                const currentClickIndex = liEl.index() + 1;
                $('.coverflow-items .c-image').each(function () {
                  const imageItemIndex = $(this).index() + 1;

                  if (currentClickIndex === imageItemIndex) {
                    $(this).addClass('active-image');
                  } else {
                    $(this).removeClass('active-image');
                  }
                });

                changeImage(currentClickIndex);
              }
            );

            changeImage(initImage);
          } else {
            // Slider on mobile - Variation 4
            const awiVariation4Slider = document.querySelectorAll(
              '.accordion-with-image.variation-4'
            );
            awiVariation4Slider.forEach(async () => {
              const image = new Splide('#awi-variation-4-image', {
                type: 'slide',
                rewind: false,
                pagination: false,
                arrows: false,
                autoplay: false,
                perPage: 1,
                perMove: 1,
              });

              const data = new Splide('#awi-variation-4-data', {
                gap: 20,
                rewind: false,
                pagination: false,
                cover: true,
                isNavigation: true,
                arrows: true,
                autoplay: false,
                perPage: 1,
                perMove: 1,
                drag: false,
              }).mount();

              image.sync(data).mount();
            });
          }
        })
        .trigger('resize');
    },
  };
})(jQuery, Drupal);
