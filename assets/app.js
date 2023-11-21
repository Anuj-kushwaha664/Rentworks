let menu = document.querySelector(".menu");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function(){

  console.log(menu);
  console.log(navbar);
  navbar.classList.toggle("visible");
});

var swiper = new Swiper(".container", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop: true,
  });
