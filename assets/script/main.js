// swiper
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".voice__carousel", {
    loop: false,
    spaceBetween: 15,
    slidesPerView: 1.2,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      }
    }
  });
});