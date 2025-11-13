// 언어 클릭팝업
const langBtn = document.querySelector(".lang_btn");
const langOn = document.querySelector(".lang_on");

langBtn.addEventListener('click', () => {
    langOn.classList.toggle("active");
});


// 로그인 클릭팝업
const loginBtn = document.querySelector(".login_btn");
const loginOn = document.querySelector(".login");
const closeBtn = document.querySelector(".close_btn");

loginBtn.addEventListener('click', () => {
    loginOn.classList.add("acctive");
});

closeBtn.addEventListener('click', () => {
    loginOn.classList.remove("acctive");
});

loginOn.addEventListener('click', (e) => {
    if (e.target === loginOn) { // overlay 자기 자신만 클릭했을 때
        loginOn.classList.remove("acctive");
    }
});


// 헤더 스크롤시 변경
const container = document.querySelector('.container');
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;

container.addEventListener('scroll', () => {
    if (container.scrollTop > headerHeight) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    };
});


// 헤더 마우스호버 오픈
const nav = document.querySelector('nav');
const mainMenu = document.querySelector('.main_menu');
const allSubMenu = document.querySelectorAll('.sub_menu');
const headerBaseHeight = 80;

function getMaxsubmenuHeight() {
    let maxHeight = 0;
    allSubMenu.forEach(sub => {
        const h = sub.scrollHeight;
        if (h > maxHeight) {
            maxHeight = h
            console.log(maxHeight);
        };
    });
    return maxHeight;
};

nav.addEventListener('mouseover', () => {
    const maxHeight = getMaxsubmenuHeight();
    header.classList.add('active');
    header.style.height = (headerBaseHeight + maxHeight) + 'px';
    mainMenu.classList.add('active');
});

nav.addEventListener('mouseleave', () => {
    const maxHeight = getMaxsubmenuHeight();
    header.style.height = headerBaseHeight + 'px';
    if (container.scrollTop <= headerHeight) {
        header.classList.remove('active');
    };
    mainMenu.classList.remove('active');
});


// 퀵메뉴 호버

const quickArea = document.querySelector('.quick_area');
const quickBtn = document.querySelector('.quick_btn');
const quickMenu = document.querySelector('.quick_menu');

quickBtn.addEventListener('mouseenter', () => {
    quickMenu.classList.add('active');
});

quickArea.addEventListener('mouseleave', () => {
    quickMenu.classList.remove('active');
});


// 탑버튼 호버

const topBtn = document.querySelector('.top_btn');
const topIcon = document.querySelector('.top_btn img');

topBtn.addEventListener('mouseover', () => {
    topIcon.classList.add('active');
});

topBtn.addEventListener('mouseleave', () => {
    topIcon.classList.remove('active');
});


//sec3 탭메뉴

// 모든 버튼과 콘텐츠 가져오기
const tabButtons = document.querySelectorAll('.sec3_tab_button');
const tabContents = document.querySelectorAll('.sec3_tab_content');

// 페이지 로드 시 기본으로 tab1 콘텐츠만 보여주기
window.addEventListener('DOMContentLoaded', () => {
    tabContents.forEach(content => {
        if (content.dataset.tab === 'tab1') {
            content.style.display = "block"; // tab1은 보이기
        } else {
            content.style.display = "none";  // 나머지는 숨기기
        }
    });
});

// 각 버튼에 클릭 이벤트 등록
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.dataset.tab; // 클릭한 버튼의 data-tab 값

        // 모든 버튼에서 active 제거
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // 콘텐츠 갱신
        tabContents.forEach(content => {
            if (content.dataset.tab === target) {
                content.style.display = "block"; // 선택된 탭만 표시
            } else {
                content.style.display = "none"; // 나머지는 숨기기
            }

            // 애니메이션 효과 (active 클래스 잠깐 부여했다 제거)
            content.classList.add('active');
            setTimeout(() => {
                content.classList.remove('active');
            }, 10);
        });

        // 클릭된 버튼에 active 추가
        button.classList.add('active');
    });
});


//sec1 Swiper

// 썸네일용 Swiper
var thumbSwiper = new Swiper(".thumSwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

// 메인 Swiper
var mainSwiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    thumbs: {
        swiper: thumbSwiper, // 여기서 연결
    },
    effect: "fade",
    loop: "true",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    simulateTouch: false,
});

//sec5 드랍

const sec5Contents = document.querySelectorAll('.sec5_content');

sec5Contents.forEach(sec5Content => {
    sec5Content.addEventListener('click', () => {
        sec5Contents.forEach(sec5ContentRemove => {
            sec5ContentRemove.classList.remove('on');
        });

        sec5Content.classList.add('on');
    });
});