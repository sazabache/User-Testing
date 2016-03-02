$(document).scroll(function() {    
    var scroll = $(this).scrollTop();

    if (scroll >= 100) {
        $("#menu").addClass("active");
    } else {
        $("#menu").removeClass("active");
    }

});



$(".navbar-toggle").click(function(){
  $(this).toggleClass("open");
});
//Menu
/*$(".navbar-toggle").on('click', function() {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
});*/


$('a.page-scroll').click(function(e){
  e.preventDefault();
  $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
});


$('a.page-scroll2').click(function(e){
  e.preventDefault();
  $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
});

