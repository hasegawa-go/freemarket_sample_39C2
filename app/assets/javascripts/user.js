$(function() {

  // ①タブをクリックしたら発動
  $('.mypage__main__right__middle__tabs li').click(function(e) {

    // ②クリックされたタブの順番を変数に格納
    var index = $('.mypage__main__right__middle__tabs li').index(this);
    // console.log(index);
    // ③クリック済みタブのデザインを設定したcssのクラスを一旦削除
    $('.mypage__main__right__middle__tabs li').removeClass('mypage__main__right__middle__tabs--active');

    // ④クリックされたタブにクリック済みデザインを適用する
    $(this).addClass('mypage__main__right__middle__tabs--active');


    // ⑤コンテンツを一旦非表示にし、クリックされた順番のコンテンツのみを表示
    $('.mypage__main__right__middle__content ul').removeClass('mypage__main__right__middle__content__item-list').eq(index).addClass('mypage__main__right__middle__content__item-list');
    e.preventDefault();
  });
});



$(function() {

  // ①タブをクリックしたら発動
  $('.mypage__main__right__bottom__tabs li').click(function(e) {

    // ②クリックされたタブの順番を変数に格納
    var index = $('.mypage__main__right__bottom__tabs li').index(this);

    // ③クリック済みタブのデザインを設定したcssのクラスを一旦削除
    $('.mypage__main__right__bottom__tabs li').removeClass('mypage__main__right__bottom__tabs--active');

    // ④クリックされたタブにクリック済みデザインを適用する
    $(this).addClass('mypage__main__right__bottom__tabs--active');

    // ⑤コンテンツを一旦非表示にし、クリックされた順番のコンテンツのみを表示
    $('.mypage__main__right__bottom__content ul').removeClass('mypage__main__right__bottom__content__item-list').eq(index).addClass('mypage__main__right__bottom__content__item-list');
    e.preventDefault();
  });
});




