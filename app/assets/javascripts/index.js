// window.addEventListener('load', function() {
//     var swiper = new Swiper('.swiper-container', {
//     loop: true,
//     pagination: '.swiper-pagination',
//     nextButton: '.swiper-button-next',
//     prevButton: '.swiper-button-prev'
//     });
//     }, false);

$( function() {
var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
    },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
});
});

