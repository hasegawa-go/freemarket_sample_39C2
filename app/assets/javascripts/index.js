$(document).on('turbolinks:load', function() {
// 上記はjqによる非同期通信を有効化させるコード（このコードがなければturbolinksの動きにより、jqの非同期通信がされない）
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
    disableOnInteraction: false
      },
    });
  });
});

