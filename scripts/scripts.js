'use strict';

// ПРЕЛОАДЕР

{
  document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.page-loader');


    setTimeout(function () {
      preloader.classList.add('loaded')
    }, 2000);
  })
}


// СЛАЙДЕР БРЕНДОВ (INDEX.HTML)
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


// ФОРМА ОБРАТНОЙ СВЯЗИ НА СТРАНИЦЕ ФОРМЫ (FORM.HTML)
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



// СЛАЙДЕР ОТЗЫВОВ (INDEX.HTML, ABOUT-US.HTML)
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


// СЛАЙДЕР СОТРУДНИКОВ (INDEX.HTML)
{
  if (document.querySelector('.workers')) {
    $('.workers__list').slick({
      infinite: false,
      arrows: false,
      slidesToShow: 4,
      autoplay: true,
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

// МАСКА ДЛЯ НОМЕРА ТЕЛЕФОНА В МОДАЛКЕ
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


// ФУНКЦИЯ ПЛАВНОГО СКРОЛЛА
{
  $(function () {
    $("a[href^='#']").click(function () {
      let _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
      return false;
    });
  });
}




// ОТКРЫВАНИЕ И ЗАКРЫВАНИЕ МЕНЮ

const toggle = document.querySelector('.toggle'),
  menu = document.querySelector('.page-nav__inner');

toggle.addEventListener('click', function () {
  if (!toggle.classList.contains('toggle--opened')) {
    toggle.classList.add('toggle--opened');

    menu.classList.add('page-nav__inner--active');

    freeze();

    return;
  }

  toggle.classList.remove('toggle--opened');

  menu.classList.remove('page-nav__inner--active');

  unfreeze();
})

// СКРИПТ ЗАМОРАЖИВАЕТ СТРАНИЧУ ЗАПРЕЩАЯ СКРОЛЛ

function freeze() {
  const html = document.querySelector('html');

  if (html.style.position !== 'fixed') {
    const top = html.scrollTop ? html.scrollTop : document.querySelector('body').scrollTop;

    if (window.innerWidth > html.innerWidth) {
      html.style.overflowY = 'scroll';
    }


    Object.assign(html.style, {
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: -top,
    })
  }
};


// СКРИПТ РАЗМОРАЖИВАЕТ СТРАНИЦУ

function unfreeze() {
  const html = document.querySelector('html');

  if (html.style.position === 'fixed') {
    html.style.position = 'static';

    html.scrollTop = -parseInt(html.style.top = '10');

    Object.assign(html.style, {
      position: '',
      width: '',
      height: '',
      top: '',
      'overflow-y': '',
    })
  }
}
