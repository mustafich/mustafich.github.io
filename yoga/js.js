window.addEventListener("DOMContentLoaded", function () {
    "use strict"
    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");


    function hide(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }

    hide(1);

    function show(b) {
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        }
    }


    info.addEventListener("click", function (event) {
        var target = event.target;
        if (target && target.classList.contains("info-header-tab")) {
            for (var i = 0; i < tab.length; i++) {
                if (target === tab[i]) {
                    hide(0);
                    show(i);
                    break;
                }
            }
        }
    })


    var deadline = "2020-10-21";

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t / 1000) % 60);
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let hours = Math.floor((t / (1000 * 60 * 60)));
        // var day = Math.floor((t/1000/60/60)%24);

        return {
            "total": t,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        }
    }

    function setCloak(id, endtime) {
        let timer = document.getElementById(id);
        let hours = timer.querySelector(".hours");
        let minutes = timer.querySelector(".minutes");
        let seconds = timer.querySelector(".seconds");
        let timeInterval = setInterval(updateCloak, 1000);

        function updateCloak() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setCloak("timer", deadline)


    ///modal//////

    let more = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close"),
        btnTab = document.querySelectorAll(".description-btn");
    more.addEventListener("click", function () {
        overlay.style.display = "block";
        this.classList.add("more-splash");
        document.body.style.overflow = "hidden";

    })
    close.addEventListener("click", function () {
        overlay.style.display = "none";
        more.classList.remove("more-splash");
        console.log(this);
        document.body.style.overflow = "";
    })

    btnTab.forEach(function (i) {
        i.addEventListener("click", function () {
            overlay.style.display = "block";
            this.classList.add("more-splash");
            document.body.style.overflow = "hidden";
        })
    })

    more.addEventListener("click", function () {
        console.log(this)
        var x = () => {
            console.log(this)
        }
        x();
    })

    ///////forma/////////////

    var message = {
        loading: "Загрузка...",
        success: "Спасибо! Скоро мы с вами свяжимся",
        failure: "Что-то пошло не так"
    }
    let form = document.querySelector(".main-form"),
        input = form.getElementsByTagName("input"),
        statusMessage = document.createElement("div");
    statusMessage.classList.add("status");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open("POST", "server.php");
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        let formDate = new FormData(form);
        request.send(formDate);
////изминие состатояиния.....
        request.addEventListener("readystatechange", function () {
            if (request.readeState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        })
        for (let i = 0; i < input.length; i++) {
            input[0].value = " ";
        }
    })

    let formFooter = document.querySelector("#form"),
        input2 = formFooter.getElementsByTagName("input");

    formFooter.addEventListener("submit", function (event) {
        event.preventDefault();

        formFooter.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open("POST", "server.php");
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        let formDate = new FormData(formFooter);
        request.send(formDate);
////изминие состатояиния.....
        request.addEventListener("readystatechange", function () {
            if (request.readeState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        })
        for (let i = 0; i < input2.length; i++) {
            input2[0].value = " ";
        }
        for (let i = 0; i < input2.length; i++) {
            input2[1].value = " ";
        }
    })


    ///////////////////////slider////////////////

    let slideIndex = 1,
        slides = document.querySelectorAll(".slider-item"),
        prev = document.querySelector(".prev"),
        next = document.querySelector(".next"),
        dotsWrap = document.querySelector(".slider-dots"),
        dots = document.querySelectorAll(".dot");

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach((i) => i.style.display = "none");
        dots.forEach((i) => i.classList.remove("dot-active"));

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("dot-active");
    }

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n)
    }

    function currentSlide(n) {
        showSlides(slideIndex = n)
    }

    next.addEventListener("click", function () {
        plusSlides(1)
    })
    prev.addEventListener("click", function () {
        plusSlides(-1)
    })


    dotsWrap.addEventListener("click", function (event) {
        for (let i = 0; i <= dots.length + 1; i++) {
            if (event.target.classList.contains("dot") && event.target === dots [i - 1]) {
                currentSlide(i)
            }
        }
    });


    //////////////////////////calik/////////////////////////////


    let persons = document.querySelectorAll(".counter-block-input")[0],
        restDays = document.querySelectorAll(".counter-block-input")[1],
        place = document.getElementById("select"),
        totalValue = document.getElementById("total"),
        inputPeople = 0,
        inputDays = 0,
        total = 0;

    totalValue.innerHTML = 0;




    persons.addEventListener("change", function () {
        inputPeople = +this.value;
        total = (inputPeople + inputDays) * 4000;

        if (restDays.value === '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }

    })

    restDays.addEventListener("change", function () {
        inputDays = +this.value;
        total = (inputPeople + inputDays) * 4000;

        if (persons.value === "") {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }

    })

    place.addEventListener("change", function () {
        if (persons.value === "" || restDays.value === '') {
            totalValue.innerHTML = 0;
        } else {
    let a = total;
    totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    })



    ////////////////////Анимация мен////////////////////


    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });

});

