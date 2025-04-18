// swiper
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".voice__carousel", {
    loop: false,
    spaceBetween: 15,
    slidesPerView: 1.2,
    slidesPerGroup: 1,
    centeredSlides: true,
    watchOverflow: false,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
    },

    breakpoints: {
      768: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        centeredSlides: false,
        loop: true,
      }
    }
  });
});


