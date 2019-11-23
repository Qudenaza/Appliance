'use strict';

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

    // new Vue({
    //   el: '.appliance',
    //   data: {
    //     dishwasherSelected: false,
    //     conditionerSelected: false,
    //     fridgeSelected: false,
    //     washingSelected: false,
    //     curtainSelected: false,
    //   }
    // })
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
        }
      ]
    });
  }
}

{
  if (document.querySelector('.reviews')) {
    $('.reviews__body').slick({
      infinite: false,
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
  if (document.querySelector('.workers')) {
    $('.workers__list').slick({
      infinite: false,
      arrows: false,
      slidesToShow: 4,
      // autoplay: true,
      responsive: [
        {
          breakpoint: 650,
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
      ]
    });
  }
}