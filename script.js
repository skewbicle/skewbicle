/* ================================= */
/* ============ SWIPER ============== */
/* ================================= */

const swiper = new Swiper('.mySwiper', {

  loop: true,

  effect: 'fade',

  fadeEffect: {
    crossFade: true,
  },

  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  /*
    Watch for changes to the page/layout.
    This helps when switching English ↔ Arabic.
  */

  observer: true,
  observeParents: true,

});


/* ================================= */
/* ======== LANGUAGE SYSTEM ========= */
/* ================================= */

const languageSwitcher =
  document.getElementById('languageSwitcher');


function changeLanguage(language) {

  /* Change HTML language */

  document.documentElement.lang = language;


  /* Change page direction */

  if (language === 'ar') {

    document.documentElement.dir = 'rtl';

  } else {

    document.documentElement.dir = 'ltr';

  }


  /* Translate all text */

  document
    .querySelectorAll('[data-en][data-ar]')
    .forEach(element => {

      element.textContent =
        element.dataset[language];

    });


  /* Translate image alt text */

  document
    .querySelectorAll('img[data-alt-en][data-alt-ar]')
    .forEach(image => {

      image.alt =
        image.dataset[`alt-${language}`];

    });


  /* Save selected language */

  localStorage.setItem(
    'skewbicle-language',
    language
  );


  /*
    IMPORTANT:

    The page direction has changed.
    Tell Swiper to recalculate itself.
  */

  swiper.update();


  /*
    Make sure autoplay is running.
  */

  if (swiper.autoplay) {
    swiper.autoplay.start();
  }

}


/* ================================= */
/* ======== LOAD SAVED LANGUAGE ==== */
/* ================================= */

const savedLanguage =
  localStorage.getItem('skewbicle-language') || 'en';


languageSwitcher.value = savedLanguage;

changeLanguage(savedLanguage);


/* ================================= */
/* ===== LANGUAGE SWITCH EVENT ===== */
/* ================================= */

languageSwitcher.addEventListener(
  'change',
  function () {

    changeLanguage(this.value);

  }
);
