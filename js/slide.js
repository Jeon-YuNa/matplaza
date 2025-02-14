const swiper = new Swiper(".showRoom", {
  slidesPerView: 1.3,
  spaceBetween: 15,
  breakpoints: {
    // 화면의 넓이가 1081px 이상일 때
    1081: {
      slidesPerView: 4.3,
      spaceBetween: 20,
    },
    641: {
      slidesPerView: 2.3,
      spaceBetween: 20,
    },
  },
});
