/**
 * Timeline JS
 */

(function timelineComp($, Drupal) {
  Drupal.behaviors.timeline = {
    attach() {
      $('.variation1 .timelineSlider')
        .not('.slick-initialized')
        .slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          fade: false,
          infinite: true,
          speed: 400,
          arrows: false,
          variableWidth: true,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              },
            },
          ],
        });

      $('.variation1 .timelineSliderNav')
        .on('init', function timelineYearnav() {
          $('.timelineSliderNav .slick-slide.slick-current').addClass('is-active');
        })
        .not('.slick-initialized')
        .slick({
          slidesToShow: 10,
          slidesToScroll: 1,
          dots: false,
          focusOnSelect: false,
          infinite: false,
          arrows: false,
          useTransform: false,
        });

      $('.variation1 .timelineSlider').on('afterChange', function timelineCurrentslide() {
        const slideyear = $(this)
          .find('.slick-current.slick-active .top-section .year')
          .text()
          .replace(/[^0-9]/gi, '');
        const currrentNavSlideElem = `.timelineSliderNav .slick-slide [data-date="${slideyear}"]`;
        $('.variation1 .timelineSliderNav .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem)
          .parents('.slick-slide')
          .addClass('is-active');
      });

      $('.variation1 .timelineSliderNav').on('click', '.slick-slide', function getSlideryear(
        event
      ) {
        event.preventDefault();
        const slideyear = $(this)
          .find('.year-title')
          .text()
          .replace(/[^0-9]/gi, '');
        let count = 0;
        $(".variation1 .timelineSlider .slick-slide:not('.slick-cloned')").each(
          function timelineYearslider() {
            if (
              $(this)
                .find('.year')
                .text()
                .replace(/[^0-9]/gi, '') === slideyear
            ) {
              if (count === 0) {
                const goToSingleSlide = $(this).data('slick-index');
                $('.variation1 .timelineSlider').slick('slickGoTo', goToSingleSlide);
                count = +1;
              }
            }
          }
        );
      });

      $('.variation3 .timelineSlider, .variation4 .timelineSlider').on(
        'afterChange',
        function timelineHorizontal(event, slick, currentSlide) {
          $('.timelineSliderNav').slick('slickGoTo', currentSlide);
          const currrentNavSlideElem = `.timelineSliderNav .slick-slide[data-slick-index="${currentSlide}"]`;
          $('.timelineSliderNav .slick-slide.is-active').removeClass('is-active');
          $(currrentNavSlideElem).addClass('is-active');
        }
      );

      $('.variation3 .timelineSlider')
        .not('.slick-initialized')
        .slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: false,
          infinite: true,
          useTransform: true,
          speed: 400,
          arrows: true,
          prevArrow:
            '<div class="prev-arrow"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_b_21869_293939)"><rect width="36" height="36" rx="18" fill="#1F1F1F"/><path d="M20.5 23L15.5 18L20.5 13" stroke="white" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/> </g><defs><filter id="filter0_b_21869_293939" x="-8" y="-8" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_21869_293939"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_21869_293939" result="shape"/></filter></defs></svg></div>',
          nextArrow:
            '<div class="next-arrow"><svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_b_21869_293940)"><rect x="0.5" width="36" height="36" rx="18" fill="#1F1F1F"/><path d="M16 23L21 18L16 13" stroke="white" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/></g><defs><filter id="filter0_b_21869_293940" x="-7.5" y="-8" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_21869_293940"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_21869_293940" result="shape"/></filter></defs></svg></div>',
        });

      $('.variation4 .timelineSlider')
        .not('.slick-initialized')
        .slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: false,
          infinite: true,
          useTransform: true,
          speed: 400,
          arrows: true,
          prevArrow:
            '<div class="prev-arrow"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_b_21869_293939)"><rect width="36" height="36" rx="18" fill="white"/><path d="M20.5 23L15.5 18L20.5 13" stroke="#68737D" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/> </g><defs><filter id="filter0_b_21869_293939" x="-8" y="-8" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_21869_293939"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_21869_293939" result="shape"/></filter></defs></svg></div>',
          nextArrow:
            '<div class="next-arrow"><svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_b_21869_293940)"><rect x="0.5" width="36" height="36" rx="18" fill="white"/><path d="M16 23L21 18L16 13" stroke="#68737D" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/></g><defs><filter id="filter0_b_21869_293940" x="-7.5" y="-8" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_21869_293940"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_21869_293940" result="shape"/></filter></defs></svg></div>',
        });

      $('.variation3 .timelineSliderNav, .variation4 .timelineSliderNav')
        .on('init', function timlineFullwidth() {
          $('.timelineSliderNav .slick-slide.slick-current').addClass('is-active');
        })
        .not('.slick-initialized')
        .slick({
          slidesToShow: 10,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                fade: true,
              },
            },
          ],
        });

      $('.variation2 .timelineSlider .year_wrapper > .milestone span').on(
        'click',
        function timlineVetical() {
          const $this = $(this).parents('.year_wrapper');
          const scrollTargetTop =
            $this.position().top + $('.variation2 .timelineSlider').offset().top;
          $('html, body').animate(
            { scrollTop: scrollTargetTop },
            {
              duration: 400,
              complete: function complete() {
                return false;
              },
            }
          );
        }
      );

      const addClassOnScroll = () => {
        const windowTop = $(window).scrollTop();
        $('.variation2 .timelineSlider .year_wrapper').each(function getYears(index, elem) {
          const offsetTop = $(elem).offset().top;
          const outerHeight = $(this).outerHeight(true);

          if (windowTop > offsetTop - 50 && windowTop < offsetTop + outerHeight) {
            $('.variation2 .timelineSlider .year_wrapper').removeClass('active');
            $(this).addClass('active');
          }
        });
      };

      $('.journey_text_variation2, .timeline-journey-text')
        .closest('.inner')
        .addClass('timeline-main-wrapper')
        .attr('tabindex', '0');

      $(window).on('scroll', function callOnScroll() {
        addClassOnScroll();
      });
    },
  };
})(jQuery, Drupal);
