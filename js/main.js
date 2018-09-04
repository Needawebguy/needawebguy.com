$(document).ready(function() {
  Barba.Prefetch.init();
  Barba.Pjax.start();
});
$(window).scroll(function() {
  var offset = $('.main-nav').offset();
  var offsetTrigger = offset.top + 56;
  if( $(this).scrollTop() > offsetTrigger )  {
    $('.scroll-nav').addClass('show');
  }
  else {
    $('.scroll-nav').removeClass('show');
  }
});
