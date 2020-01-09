'use strict';

// GLOBAL


window.addEventListener('scroll', function (e) {
  if ($('.page-nav').hasClass('page-nav--opened')) {
    closeNavbar();
  }
});

function closeNavbar() {
  const navigation = document.querySelector('.page-nav');

  navigation.classList.add('page-nav--closed');
  navigation.classList.remove('page-nav--opened');
};

// LOCAL

{
  if (document.querySelector('.slider')) {
    $('.slider').slick({
      infinite: false,
      arrows: false,
      dots: false,
      cancelable: false,
      autoplay: true,
      autoplaySpeed: 6000
    })
  }

}


{
  const navMain = document.querySelector('.page-nav'),
    navToggle = document.querySelector('.page-nav__toggle');

  navMain.classList.remove('page-nav--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('page-nav--closed')) {
      navMain.classList.remove('page-nav--closed');
      navMain.classList.add('page-nav--opened');
    } else {
      navMain.classList.add('page-nav--closed');
      navMain.classList.remove('page-nav--opened');
    }
  });
}

{
  document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.page-loader');


    setTimeout(function () {
      preloader.classList.add('loaded')
    }, 2000);
  })
}

{
  if (document.querySelector('.feedback')) {
    new Vue({
      el: '.feedback',
      data: {
        customerName: '',
        phoneNumber: '',
        radioChoice: 'needAppliance',
        recallChoice: '',
        message: '',
        showRecallNotice: false,
        isActive: true
      },
      watch: {
        phoneNumber() {

        }
      },
      mounted() {
        Inputmask({
          mask: '+7 (999) 999-99-99',
          oncomplete: () => {
            this.showRecallNotice = true
          },
          onincomplete: () => {
            this.showRecallNotice = false
          }
        }).mask('input[data-type="tel"]');
      },
      computed: {
        otherQuestions() {
          return this.radioChoice == 'needAppliance' ? true : false
        }
      }
    });
  }

}


{
  if (document.querySelector('.brands')) {
    $('.brands__wrapper').slick({
      infinite: false,
      arrows: false,
      slidesToShow: 4,
      autoplay: true,
      responsive: [
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
          }
        }
      ]
    });
  }
}

{
  if (document.querySelector('.reviews')) {
    $('.reviews__body').slick({
      infinite: true,
      arrows: false,
      slidesToShow: 3,
      autoplay: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            fade: true,
            speed: 2000
          }
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
          }
        },
      ]
    });
  }
}

{
  // if (document.querySelector('.workers')) {
  //   $('.workers__list').slick({
  //     infinite: false,
  //     arrows: false,
  //     slidesToShow: 4,
  //     // autoplay: true,
  //     responsive: [
  //       {
  //         breakpoint: 650,
  //         settings: {
  //           slidesToShow: 1,
  //           fade: true,
  //           speed: 2000
  //         }
  //       },
  //       {
  //         breakpoint: 1100,
  //         settings: {
  //           slidesToShow: 2,
  //         }
  //       },
  //     ]
  //   });
  // }
}

{
  if (document.querySelector('.modal')) {
    const im = new Inputmask('+7 (999) 999-99-99', {
      "clearIncomplete": true
    }).mask('input[data-type="tel"]');

    $('.js-open-modal').on('click', function (e) {
      e.preventDefault();

      document.body.classList.add('shadow');

      $('.modal').fadeIn();
    })

    $('.js-modal-close').on('click', function () {
      document.body.classList.remove('shadow');

      $('.modal').fadeOut();
    })
  }
}

{
  $(function () {
    $("a[href^='#']").click(function () {
      let _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
      return false;
    });
  });
}
