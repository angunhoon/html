const langBtn = document.querySelector(".lang_btn");
const langOn = document.querySelector(".lang_on");

langBtn.addEventListener('click', () => {
    langOn.classList.toggle("active");
});


const loginBtn = document.querySelector(".login_btn");
const loginOn = document.querySelector(".login");
const closeBtn = document.querySelector(".close_btn");

loginBtn.addEventListener('click', ()=>{
    loginOn.classList.add("acctive");
});

closeBtn.addEventListener('click',()=>{
    loginOn.classList.remove("acctive");
});