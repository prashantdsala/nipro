// Function to scroll image upward when card animate on scroll.
/* eslint-disable */
(function carousel_aos($, Drupal) {
  Drupal.behaviors.carouselAOS = {
    attach() {
      const carousel = document.querySelectorAll('.carousel-wrapper'); // All carousel wrapper.
      const animationClass = document.querySelectorAll('.carousel.animation');
      const childDiv = document.querySelectorAll('div.image-wrapper');

      window.addEventListener('scroll', animation);
      function animation() {
        const bottom = (window.innerHeight / 5) * 3;
        carousel.forEach(function(element) {
          const carouselImageTop = element.getBoundingClientRect().top;
          animationClass.forEach(function(animation,i) {
            if(carouselImageTop < bottom) {
              if(animation !== undefined) {
                animation.classList.add('animation-scroll');
              }
              if(childDiv[i] !== undefined) {
                childDiv[i].classList.add('image-animation');
              }
            } else {
              if(animation !== undefined) {
                animation.classList.remove('animation-scroll');
              }
              if(childDiv[i] !== undefined) {
                childDiv[i].classList.remove('image-animation');
              }
            }
          });
        });
      }
    },
  };
})(jQuery, Drupal);
