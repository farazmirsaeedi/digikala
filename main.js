
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 13,
    spaceBetween: 30,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 7,
          spaceBetween: 40
        },
        1200:{
            slidesPerView: 13,
            spaceBetween: 30
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
