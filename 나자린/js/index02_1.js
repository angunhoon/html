const refund = document.querySelector(".refund")
const refund_link = document.querySelector(".refund_link")
const close_btn = document.querySelector(".close_btn")

refund_link.addEventListener("click", refund_open);
function refund_open(e) {
    e.preventDefault();
    refund.style.display = "flex";
};

close_btn.addEventListener("click", refund_close);
function refund_close() {
    refund.style.display = "none";
};

//Aroom swiper

const thumbSwiper = new Swiper('.a-thumb-swiper', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
const swiper = new Swiper(".a-main-swiper", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    thumbs: {
        swiper: thumbSwiper,
    },
});

//Broom swiper

const thumbSwiper2 = new Swiper('.b-thumb-swiper', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
const swiper2 = new Swiper(".b-main-swiper", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    thumbs: {
        swiper: thumbSwiper2,
    },
});

//Groom swiper

const thumbSwiper3 = new Swiper('.g-thumb-swiper', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
const swiper3 = new Swiper(".g-main-swiper", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    thumbs: {
        swiper: thumbSwiper3,
    },
});

//review swiper

var swiper4 = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });