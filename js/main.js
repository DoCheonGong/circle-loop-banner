const banner_ul = document.querySelector(".banner ul");
const banners = banner_ul.children;
const btns = document.querySelector(".btns");
const [prev, next] = btns.children;
const pop = document.querySelector(".pop");
const close = pop.querySelector(".close");
const opens = banner_ul.querySelectorAll("a");

// 초기화
for (let i = 0; i < 3; i++) banner_ul.prepend(banner_ul.lastElementChild);

prev.addEventListener("click", movePrev);
next.addEventListener("click", moveNext);

// a 버튼을 누르면 .pop을 띄운다
opens.forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        let txt = e.currentTarget.closest("li").querySelector("h2").innerText;
        pop.querySelector("h2").innerText = txt;
        pop.classList.add("on");
        e.currentTarget.classList.add("off");
        btns.classList.add("off");
    })
})

close.addEventListener("click", closePop);

function movePrev() {
    banner_ul.prepend(banner_ul.lastElementChild);
    active();
}
function moveNext() {
    banner_ul.append(banner_ul.firstElementChild);
    active();
}

function closePop() {
    pop.classList.remove("on");
    banner_ul.querySelector("li.on a").classList.remove("off");
    btns.classList.remove("off");
}

function active() {
    for (let el of banners) el.classList.remove("on");
    banners[3].classList.add("on");
}