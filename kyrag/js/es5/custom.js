(function () {
    'use strict';

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

        // var section = document.querySelectorAll("section");
        // var a = document.querySelectorAll("a.activer");
        // section.forEach(function (element) {
        //
        //     var top = element.offsetTop;
        //     var topp = top - 300;
        //
        //     var bottom = topp + element.offsetHeight;
        //
        //     var scroll = window.pageYOffset || document.documentElement.scrollTop;
        //
        //     var id = element.getAttribute('id');
        //
        //     if (scroll > topp && scroll < bottom) {
        //
        //         a.forEach(function (x) {
        //             x.classList.remove("activer");
        //         })
        //
        //         $('a[href="#' + id + '"]').addClass('activer');
        //     }
        //
        // })
    };
    //
    // function func () {
    //     $("ul").on("click","a", function (event) {
    //         // исключаем стандартную реакцию браузера
    //         event.preventDefault();
    //
    //
    //         // получем идентификатор блока из атрибута href
    //         var id  = $(this).attr('href'),
    //
    //             // находим высоту, на которой расположен блок
    //             top = $(id).offset().top;
    //
    //         // анимируем переход к блоку, время: 800 мс
    //         $('body,html').animate({scrollTop: top}, 800);
    //     });
    // }
    // func();


    // let menuBtn = document.querySelector(".header-menu_block__menuMobile"),
    //     menuPop = document.querySelector('.menuMob'),
    //     close = document.querySelectorAll('.menuMob ul li');
    //
    // menuBtn.addEventListener('click',function () {
    //     menuPop.style.top = 0;
    // })
    // close.forEach(function (value) {
    //     value.addEventListener('click',function () {
    //         menuPop.style.top = -1000 + "px";
    //     })
    // })
})();

//# sourceMappingURL=custom.js.map