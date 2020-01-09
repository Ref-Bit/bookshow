// Sticky Nav
let navbar = $('.navbar');
$(window).scroll(function(){
  // console.log(window.innerHeight);
  // console.log($('.section2').offset().top);
  let toTop = $('.section2').offset().top = window.innerHeight;
  if($(window).scrollTop() > toTop){
    navbar.addClass("sticky");
  }else{
    navbar.removeClass('sticky');
  }
})