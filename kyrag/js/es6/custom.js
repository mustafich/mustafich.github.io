var menu = document.querySelector(".header-menu");
var header = document.querySelector(".header");

window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;


    if (scrolled > menu.offsetHeight) {
        menu.classList.add("header-fixed");
        header.style.paddingTop = menu.offsetHeight + "px";
    } else {

        menu.classList.remove("header-fixed");
        header.style.paddingTop = 0;
    }
}


toursHot = document.querySelector(".tours-block_hot");
toursPopular = document.querySelector(".tours-block_popular");
tab = document.querySelectorAll(".tabTop");
info = document.querySelector(".tours-block");
tabContent = document.querySelectorAll(".tab");


toursHot.addEventListener("click", function () {
    toursHot.classList.add("toursActiver");
    toursPopular.classList.remove("toursActiver");
})
toursPopular.addEventListener("click", function () {
    toursPopular.classList.add("toursActiver");
    toursHot.classList.remove("toursActiver");
})

function hide(a) {
    for (var i = a; i < tabContent.length; i++) {
        tabContent[i].classList.add("hide")
    }
}

hide(1);

function show(b) {

    if (tabContent[b].classList.contains("hide")) {
        tabContent[b].classList.remove('hide');

    }

}

info.addEventListener("click", function (event) {

    var target = event.target;
    if (target && target.classList.contains("tabTop")) {
        hide(0)
        for (var i = 0; i < tab.length; i++) {
            if (target === tab[i]) {
                hide(0)
                show(i);
                break
            }
        }
    }
})


///////////////////slider/////////////////////


var headerSlider = document.querySelector(".header-slider");
var slider = document.querySelector(".slider");

function sliderRemove(item) {
    item.classList.remove("slider-active");
}

function sliderAdd() {
    headerSlider.classList.add("bg0");
    // header.classList.add("bg1");
    // header.classList.add("bg2");
    headerSlider.style.opacity = "1";

}
sliderAdd();
sliderDots = document.querySelectorAll(".slider-dots");
    sliderDots.forEach((item, i) => {
        item.addEventListener("click", function (event) {
            sliderDots.forEach(function (items) {
                items.classList.remove("slider-active");
            })
            if (event.target.tagName === "DIV") {
                sliderDots[i].classList.add("slider-active");
                for (var z = -100;z < 100;z++) {
                    headerSlider.classList.remove(`bg${i + z}`);
                    headerSlider.classList.remove(`bg${i - z}`);
                    headerSlider.classList.remove(`bg${i + z}`);
                }

                headerSlider.classList.add(`bg${i}`);
            }
        })
    })

