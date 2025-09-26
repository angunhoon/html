const langBtn = document.querySelector(".lang_btn");
const langOn = document.querySelector(".lang_on");

langBtn.addEventListener('click', () => {
    if (langOn.style.display == "none"){
        langOn.style.display = "flex";
    }else{
        langOn.style.display = "none";
    };
});