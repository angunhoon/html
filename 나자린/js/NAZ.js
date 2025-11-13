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

refund.addEventListener('click', (e) => {
    if (e.target === refund) { // overlay 자기 자신만 클릭했을 때
        refund.style.display = "none";
    }
});


// 탑버튼 
const topBtn = document.querySelector('.top_btn');
const topIcon = document.querySelector('.top_btn img');

topBtn.addEventListener('mouseover', () => {
    topIcon.classList.add('active');
});

topBtn.addEventListener('mouseleave', () => {
    topIcon.classList.remove('active');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) topBtn.classList.add('active');
    else topBtn.classList.remove('active');
});


// 모바일 헤더 메뉴

const menuBtn = document.querySelector('.header_m .list');
const menuCloseBtn = document.querySelector('.m_menu_close_btn');
const mobileMenuOverlay = document.querySelector('.m_menu_overlay');
const mobileMenu = document.querySelector('.m_menu');

menuBtn.addEventListener('click', () => {
    mobileMenuOverlay.classList.add('active');
    mobileMenu.classList.add('active');
});

menuCloseBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
});

mobileMenuOverlay.addEventListener('click', (e) => {
    if (e.target === mobileMenuOverlay) {
        mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    }
});



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


// 포트폴리오 스와이퍼

var portRecSwiper = new Swiper(".port_rec_swiper", {
    slidesPerView: 2,
    grid: {
        rows: 2,
    },
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        767: {
            slidesPerView: 4, //브라우저가 767보다 클 때
            grid: {
                rows: 2,
            },
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        },
    },
});


// 리뷰 스와이퍼

var reviewSwiper = new Swiper(".review_swiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        },
    },
});
