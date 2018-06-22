function openMenu(){
    $('.overlay').fadeIn();
    $('nav').animate({
        marginRight: '0px'
        }, 500, function() {
            //animation complete
    });
}
function closeMenu(){
    $('.overlay').fadeOut();
    $('nav').animate({
        marginRight: '-200px'
        }, 500, function() {
            //animation complete
    });
}
$(document).ready(function() {
    /*$('nav').animate({
            marginRight: '-200px'
        }, 1000, function() {
            //animation complete
    });
    $('.menu-toggle').click(function(event) {
        event.preventDefault();
        if($('nav').css('marginRight') == '-200px'){
            openMenu();
        } else {
            closeMenu();
        }
    });
    $('.overlay').click(function() {
        closeMenu();
    });*/
    Barba.Prefetch.init();
    Barba.Pjax.start();
});