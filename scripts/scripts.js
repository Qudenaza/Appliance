'use strict';

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
  if (window.location.pathname == '/form.html') {
    const app = new Vue({
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
  // if (window.location.pathname = 'index.html') {
  //   $('.manufacturer__wrapper').slick({
  //     infinite: false,
  //     arrows: false,
  //     slidesToShow: 4,
  //     // autoplay: true,
  //     responsive: [
  //       {
  //         breakpoint: 400,
  //         settings: {
  //           slidesToShow: 1,
  //         }
  //       }
  //     ]
  //   });
  // }
}