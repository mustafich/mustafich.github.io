(function () {
    'use strict';

    var filterTop = document.querySelector('.main-container_filters');
    var filterTop1 = document.querySelector('.main-container_filters-inner');
    var filterPosition = filterTop.getBoundingClientRect().top;
    var butGoods = document.querySelector(".main-container_filters-inner_but");
    if (screen.width > 993) {
        document.onscroll = function () {
            window.pageYOffset >= filterPosition ? filterTop1.classList.add('topFix') : filterTop1.classList.remove('topFix');
        };
    }
    butGoods.onclick = function () {
        filterTop.classList.toggle("scroll-left");
        if (screen.width < 370) {
            this.classList.toggle('toTop');
        }
    };

    var selects = document.querySelectorAll('.select');

    selects.forEach(function (select, index) {

        var toChoose = select.querySelector('.block');
        var choose = select.querySelectorAll('.scroll li');
        select.onclick = function () {
            this.classList.toggle('look');
            toChoose.classList.toggle('rotate');
        };
        for (var i = 0; i < choose.length; i++) {
            choose[i].onclick = function () {

                toChoose.querySelector('.hide').innerHTML = this.getAttribute('data-option') || this.getAttribute('data-color') || this.getAttribute('data-size') || this.getAttribute('data-materials');
                toChoose.querySelector('.hide').classList.add('show');
                toChoose.querySelector('.hide').style.backgroundColor = this.getAttribute('data-color');
            };
        }
    });

    var buttonSubmit = document.querySelector('.button-filter');
    buttonSubmit.onclick = function () {
        var someObj = { option: "", size: "", color: "", materials: "" };
        var option = document.querySelector('.option .block .hide');
        var size = document.querySelector('.size .block .hide');
        var color = document.querySelector('.color .block .hide');
        var materials = document.querySelector('.materials .block .hide');
        if (option.innerText !== '') {
            someObj.option = option.innerText;
        }
        if (size.innerText !== '') {
            someObj.sise = size.innerText;
        }
        if (color.innerText !== '') {
            someObj.color = color.innerText;
        }
        if (materials.innerText !== '') {
            someObj.materials = materials.innerText;
        }

        console.log('Front', someObj);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '../mail.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('param=' + JSON.stringify(someObj));
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    console.log(xhr.responseText);
                } else {
                    console.log('ajax error');
                }
            }
        };
    };
})();

//# sourceMappingURL=common.js.map