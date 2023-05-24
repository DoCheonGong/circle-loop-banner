const banner_ul = document.querySelector(".banner ul");
const banners = banner_ul.children;
const btns = document.querySelector(".btns");
const [prev, next] = btns.children;

// 초기화
for (let i = 0; i < 3; i++) banner_ul.prepend(banner_ul.lastElementChild);

prev.addEventListener("click", movePrev);
next.addEventListener("click", moveNext);

function movePrev() {
    banner_ul.prepend(banner_ul.lastElementChild);
}
function moveNext() {
    banner_ul.append(banner_ul.firstElementChild);
}