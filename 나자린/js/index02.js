const refund = document.querySelector(".refund")
const refund_link = document.querySelector(".refund_link")
const close_btn = document.querySelector(".close_btn")

refund_link.addEventListener("click",refund_open);
function refund_open(e) {
    e.preventDefault();
    refund.style.display = "flex";
};

close_btn.addEventListener("click",refund_close);
function refund_close() {
    refund.style.display = "none";
};