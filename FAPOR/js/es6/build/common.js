(function () {
'use strict';

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
};


// var active = document.getElementsByTagName("li").filter(function (item) {
//     console.log('---',item);
// });
// Array.prototype.slice.call(document.querySelectorAll("ul li")).map(function (items) {
//     console.log('---',items);
// });


var arr = document.querySelectorAll("ul li");
var res = Array.from(arr).filter(function (item,index) {
 return item.classList.value === 'active';
});
var list = document.querySelector('ul');
list.onmouseover = function () {
   arr.forEach(function (item) {
     item.classList.remove('active');
   });
};
list.onmouseleave = function () {
    res[0].classList.add('active');
};
console.log('---',res);
// console.log('---',active);
// active.onmouseenter = function () {
//     active = active.childNodes;
//     active = active[3];
//     active.onmouseenter = active.classList.remove("active");
//     active.onmouseleave = active.classList.add(".active");
//
//
//
//     // for (var i =0;i <= active.length;i++) {
//     //    if ( active[i] == li.active) {
//     //        return false;
//     //    }
//
//     }

//
//
// var classes = [];
//

}());

//# sourceMappingURL=common.js.map
