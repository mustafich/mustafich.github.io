var header = document.querySelector(".header");
var sectionBackground = document.querySelector(".background");

window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > header.offsetHeight) {
        header.classList.add("header-fixed");
        sectionBackground.style.marginTop = header.offsetHeight + "px";
    }
    else {
        header.classList.remove("header-fixed");
        sectionBackground.style.marginTop = 0;
    }
}


var arr = document.querySelectorAll("ul li");
var res = Array.from(arr).filter(function (item,index) {
 return item.classList.value === 'active';
})
var list = document.querySelector('ul');
list.onmouseover = function () {
   arr.forEach(function (item) {
     item.classList.remove('active')
   })
}
list.onmouseleave = function () {
    res[0].classList.add('active')
}

var foo = Array.isArray;
console.log('---',res);

















