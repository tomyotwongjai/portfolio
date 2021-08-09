$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // Menu toggle/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

// typing animation
var typed = new Typed(".typing", {
    strings: ["ambition", "blissful", "focus", "filfillment", "inspiration", "kindness",
    "productive", "splendid", "wondeful", "zen"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
// swiper project

var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });

//   day of the week
let output = document.getElementById('currentday');

let d = new Date();
let day = d.getDay();
switch(day){
    case 0:
        day = "Sunday!";
        break;
    case 1:
        day = "Monday!";
        break;
    case 2:
        day = "Tuesday!";
        break;
    case 3:
        day = "Wednesday!";
        break;
    case 4:
        day = "Thursday!";
        break;
    case 5:
         day = "Friday!";
         break;
    case 6:
        day = "Saturday!";
        break;
}
output.innerHTML = day;