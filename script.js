const swiper = new Swiper('.mySwiper', {
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true, // Prevents underlying slides from flashing during fade
  },
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true, // Pauses slider when user hovers to read text
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});