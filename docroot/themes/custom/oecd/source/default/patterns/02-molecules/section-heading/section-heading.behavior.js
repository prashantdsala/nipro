/* eslint-disable */

(function sectionHeadingComp($, Drupal) {
  Drupal.behaviors.section_heading = {
    attach: function sectionHeadingReveal() {
      var colorHeadlineRevealAnimation = drupalSettings.headlineRevealAnimation;
      var animationDuration = parseInt(drupalSettings.animationDuration) + 800;
      const sectionHeadings = document.querySelectorAll('.section-heading');

      if (sectionHeadings != null) {
        sectionHeadings.forEach(function(sectionHeading) {
          const sectionHeadingAnimation = sectionHeading.querySelector('.headline_reveal_animation');
          if (sectionHeadingAnimation) {
            const text = sectionHeadingAnimation.querySelector('span.headline_reveal_animation').children[0];
            if(text) {
              const letters = text.textContent.trim().split('');
              text.innerHTML = '';
              letters.forEach((letter) => {
                text.innerHTML += `<span>${letter}</span>`;
              });
              window.addEventListener('scroll', colorChangeAnimation);
            }

            function colorChangeAnimation() {
              if (isInViewport(sectionHeadingAnimation)) {
                const spans = text.querySelectorAll('span');
                setTimeout(() => {
                  spans.forEach((span, index) => {
                    setTimeout(() => {
                      span.style.color = colorHeadlineRevealAnimation;
                    }, index * 50);
                  });
                }, animationDuration);
              }
            }
          }

          function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
              rect.top >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            );
          }
        });
      }
    },
  };
})(jQuery, Drupal);
