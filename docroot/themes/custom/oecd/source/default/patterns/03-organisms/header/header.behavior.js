/**
 * Header JS
 */

(function headerComp($, Drupal) {
  Drupal.behaviors.header = {
    attach(context) {
      // Megamenu First Level click if has child item.
      /* eslint-disable */
      $(document).on('click', '.mega-menu-primary .navigation__item span.header-menu-item', function (e) {
        e.stopImmediatePropagation();
        e.preventDefault();

        let menuOpen = false;

        if (!menuOpen) {
          $(this).next('.menu-link-contentmain').addClass('show-sub-menu');
          $('body').addClass('scroll-freeze');
          menuOpen = true;
        }
        else {
          $(this).next('.menu-link-contentmain').removeClass('show-sub-menu');
          $('body').removeClass('scroll-freeze');
          menuOpen = false;
        }

        $(this)
          .closest('li.navigation__item')
          .siblings('li.navigation__item')
          .find('> .menu-link-contentmain')
          .removeClass('show-sub-menu');
        $(this)
          .parent('li.navigation__item')
          .siblings('li.navigation__item')
          .removeClass('menu-active');
        $(this).parent('li.navigation__item').toggleClass('menu-active');
      });

      // on Mobile/iPad close drawer sub-menu of Branch navigation.
      if ($(window).width() < 1024) {
        $(
          '._branched-navigation .section-heading .intro-section__title, ._branched-navigation-with-card .section-heading .intro-section__title'
        ).on('click', function () {
          $(this).
            closest('li.navigation__item')
            .removeClass('menu-active');
        });
      }

      // Hamburger click
      $('.hamburger-icon').on('click', (e) => {
        e.stopImmediatePropagation();

        $('.header-menu-item-wrapper').toggleClass('display-header');
        $('button.ui-hamburger-02').toggleClass('header-active');
        $('.mega-menu-primary .navigation__item').removeClass('menu-active');
        $('body').toggleClass('header-open');
        $('.hamburger_menu_and_search .main-header-menu .mega-menu-main-wrapper').toggleClass('fade-menu');
        $('.hamburger_menu_and_search .main-header-menu .block-navigation .block-navigation-content').toggleClass('fade-menu');
        $('.hamburger_menu_and_search .main-header-menu .block-navigation .block-title').toggleClass('fade-block-title');
        $('.hamburger-main-header-menu .mega-menu-primary .block-sub-menu .block-navigation-content').removeClass('show-block-content');
        $('.hamburger-main-header-menu .mega-menu-primary .block-sub-menu .menu li.has-children ul[class^="menu__level-"]').removeClass('show-menu-ul');
        $('.main-header-menu .block-navigation .menu li').removeClass('active');

        if ($(window).width() >= 1024) {
          $('.primary-header.with-hamburger.hamburger_menu_and_search .hamburger-main-header-menu ul.mega-menu-primary > .navigation__item').first().toggleClass('menu-active');
        }
      });

      // Click outside to close menu
      const $menu = $('.header-menu-item-wrapper, .hamburger-icon');
      $(document).mouseup(e => {
        if (!$menu.is(e.target)
          && $menu.has(e.target).length === 0) {
          e.stopImmediatePropagation();

          $('.header-menu-item-wrapper').removeClass('display-header');
          $('.mega-menu-primary .navigation__item').removeClass('menu-active');
          $('.menu-link-contentmain').removeClass('show-sub-menu').removeClass('opened-menu-ul');
          $('button.ui-hamburger-02').removeClass('header-active');
          $('body').removeClass('scroll-freeze header-open');
          $('.hamburger_menu_and_search .main-header-menu .mega-menu-main-wrapper').removeClass('fade-menu');
          $('.hamburger_menu_and_search .main-header-menu .block-navigation .block-navigation-content').removeClass('fade-menu');
          $('.hamburger_menu_and_search .main-header-menu .block-navigation .block-title').removeClass('fade-block-title');
          $('.main-header-menu .block-navigation .menu li').removeClass('active');
        }
      });

      // Search click
      $('.defaultheader .mobile-search-btn').on('click', () => {
        if ($('.mobile-search-btn').hasClass('active')) {
          $('.mobile-search-btn').removeClass('active');
          $('.mobile-search-input').slideUp();
        } else {
          $('.mobile-search-btn').addClass('active');
          $('.mobile-search-input').slideDown();
        }
      });

      if ($(window).width() < 1024) {
        // If sub-menu block in hamburger has children 
        // then addClass and prepend on ipad/mobile.
        $('.hamburger-main-header-menu .mega-menu-primary .block-sub-menu .menu li.has-children a', context).on('click', function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();

          let menuOpen = false;

          if (!menuOpen) {
            $(this).next('ul[class^="menu__level-"]').addClass('show-menu-ul');
            $(this).closest('.menu-link-contentmain').addClass('opened-menu-ul');
            menuOpen = true;
          }
          else {
            $(this).next('ul[class^="menu__level-"]').removeClass('show-menu-ul');
            $(this).closest('.menu-link-contentmain').removeClass('opened-menu-ul');
            menuOpen = false;
          }

          var linkText = $(this).text();

          $(this).next('ul[class^="menu__level-"]').once().prepend('<h2 class="backto-parent">' + linkText + '</h2>');
        });

        // on ipad/mobile hamburger menu on block title click removeClass.
        $('.hamburger_menu_and_search ul.mega-menu-primary > .navigation__item .menu-link-contentmain .text-block .block-title').on('click', function () {
          $(this).closest('li.navigation__item').removeClass('menu-active');
          $(this).closest('.menu-link-contentmain').removeClass('show-sub-menu');
        });

        // on ipad/mobile Back to Parent click to removeClass 
        // and go to parent level.
        $(document).on('click', '.backto-parent', function (e) {
          var elTarget = $(e.target);
          elTarget.closest('ul[class^="menu__level-"]').removeClass('show-menu-ul');
          elTarget.closest('.menu-link-contentmain').removeClass('opened-menu-ul');
        });
      }

      // If sub-menu block in main-menu inner pages has children 
      // then addClass on desktop.
      if ($(window).width() >= 1024) {
        $(once('main-header-menu', '.main-header-menu .block-navigation .menu li.has-children > a.link-element')).on('click', function innerMenuClick(e) {
          e.preventDefault();
          e.stopImmediatePropagation();

          let menuOpen = false;

          if (!menuOpen) {
            $(this).closest('li').addClass('active').siblings('li').removeClass('active');
            menuOpen = true;
          }
          else {
            $(this).closest('li').removeClass('active');
            menuOpen = false;
          }
        });
      }
    },
  };
})(jQuery, Drupal);
