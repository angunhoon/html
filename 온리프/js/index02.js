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