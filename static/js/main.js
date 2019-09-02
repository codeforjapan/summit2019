function main() {
  (function () {
    'use strict';
    // スムーススクロールページ外からも位置ずれないようにする
    var urlHash = location.hash;
    if(urlHash) {
      $('body,html').stop().scrollTop(0);
      setTimeout(function(){
        var target = $(urlHash);
        var position = target.offset().top - 71;
        $('body,html').stop().animate({scrollTop:position}, 0);
      }, 100);
    }
    $('a[href^="#"]').click(function() {
      var href= $(this).attr("href");
      var target = $(href);
      var position = target.offset().top - 71;
      $('body,html').stop().animate({scrollTop:position}, 900);
    });

    // 追記 page_top_btn fadein
    var pagetop = $('#page_top_btn');
    pagetop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {  //100pxスクロールしたら表示
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }
    });

    // Show Menu on Book
    $(window).bind('scroll', function() {
      var navHeight = $(window).height() - 500;
      if ($(window).scrollTop() > navHeight) {
        $('.navbar-default').addClass('on');
      } else {
        $('.navbar-default').removeClass('on');
      }
    });

    $('body').scrollspy({
      target: '.navbar-default',
      offset: 80
    });

    // Hide nav on click
    $(".navbar-nav li a").click(function (event) {
      // check if window is small enough so dropdown is created
      var toggle = $(".navbar-toggle").is(":visible");
      if (toggle) {
        $(".navbar-collapse").collapse('hide');
      }
    });
  }());
}

main();
