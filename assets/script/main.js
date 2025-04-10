// swiper
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".voice__carousel", {
      loop: false,
      spaceBetween: 15,
      // navigation: {
      //     nextEl: ".swiper-button-next",
      //     prevEl: ".swiper-button-prev"
      // },
      pagination: {
          el: ".swiper-pagination",
          clickable: true
      },
      breakpoints: {
          768: {
              slidesPerView: 1,
              slidesPerGroup: 1,
          },
          769: {
              slidesPerView: 1,
              slidesPerGroup: 1,
          }
      }
  });
});