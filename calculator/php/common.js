$('document').ready(function () {
    var $set = $('.tabs-box a');
$(".tabs-box a").click(function (e) {
    e.preventDefault();
    $(".tabs-box a").removeClass("active-tab");
    $(this).addClass("active-tab");
    var n=$set.index(this);
    $(".slide-shoose .slider").removeClass("active-box");
$(".slide-shoose .slider").eq(n).addClass("active-box");
    $('.active-box').slick({
        slidesToShow: 2,
        dots: true,
        prevArrow:'<span class="next1"></span>',
        nextArrow:'<span class="prev1"></span>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow:2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow:1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:1
                }
            }


        ]
    });

})
    ////////////////////button//////////////////////
    $('.but').on('click', function(){
        if(!$('#js_menu_button').hasClass('on_menu')){
            $('#js_menu_button').addClass('on_menu');
        }else{
            $('#js_menu_button').removeClass('on_menu');
        }
        $('header .menu-box .menu-item').slideToggle('slow');
        return false;
    });





    $('.active-box').slick({
        slidesToShow: 2,
        dots: true,
        prevArrow:'<span class="prev1"></span>',
        nextArrow:'<span class="next1"></span>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow:2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow:1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:1
                }
            }


        ]
    });

    ////////////////////////////////////////


        var wrapperMenu = $('.wrapper-menu');

        wrapperMenu.click(function(){
            wrapperMenu.toggleClass('open');
            $('.menu-box').toggleClass('menu-box-open');
            $('header').toggleClass('header-after');

        })
        $('.menu-box ul li a ').click(function () {

            wrapperMenu.toggleClass('open');
            $('.menu-box').toggleClass('menu-box-open');
            $('header').toggleClass('header-after');
            var t =$(this);
            setTimeout(function () {

                var href = $(t).attr('href');
                $('html, body').animate({scrollTop:$(href).position().top}, 1000);

            },400)

            return false;
        })
    /////////////////////////////
    $('.menu-box ul li a').click(function(){
        console.log(555);

    });
        $(".but-top").click(function () {
            $('html, body').animate({scrollTop:0}, 1000);
        })
    $(".menu-item a").click(function () {
        var hr = $(this).attr("href");
        $('html, body').animate({scrollTop:$(hr).position().top}, 1000);
    })


    //////////////////////////////////////////////////
    $('.big1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.small1',
        adaptiveHeight: true,
        prevArrow:'<button class="prev2"></button>',
        nextArrow:'<button class="next2"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {

                }
            },
            {
                breakpoint: 1062,
                settings: {


                }
            },
            {
                breakpoint: 768,
                settings: {


                }
            }

        ]
    });
    $('.small1').slick({
        slidesToShow:5,
        slidesToScroll: 1,
        asNavFor: '.big1',
        dots: false,
        focusOnSelect: true,
        centerPadding: '40px',
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow:5
                }
            },
            {
                breakpoint: 1062,
                settings: {
                    slidesToShow: 4,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,

                }
            }

        ]
    });
    $('[data-photo]').click(function () {
        $(".popup-images").addClass('pop-n');
    });
    $('.button-crest').click(function () {
        $('.thank-you').hide();
        $('iframe').attr('src', '');

    });

    $('[data-form]').click(function () {
        $('.thank-you-form').show();
    });
    $('[data-form-sale]').click(function () {
        $('.thank-you-form-sale').show();
    });
    $('[data-video]').click(function () {
        var res = $(this).attr('data-video');
        $("iframe").attr('src', "");
        $("iframe").attr('src', res);
        $('.thank-you-video').show();
    });
    $('.crest').click(function () {
        $('.popup-images').removeClass('pop-n');

    });
    $('.button-crest').click(function () {
        $('.thank-you').hide();

    });


    var patternEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    var patternPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,15}(\s*)?$/;
    var patternEmpty = /^[\s]+$/;
    $('input[type="text"]').on('mouseover', function () {
        $(this).css({ 'border': '1px solid #c6c6c6', 'background-color': '#f8f7f7' });
    });
    $('form').submit(function (event) {
        event.preventDefault();
        var mname = $(this).find('input[name="name"]').length > 0 ? $(this).find('input[name="name"]').val() : true;
        var mnamec = $(this).find('input[name="company-name"]').length > 0 ? $(this).find('input[name="company-name"]').val() : true;
        var mphone = $(this).find('input[name="phone"]').length > 0 ? $(this).find('input[name="phone"]').val() : true;
        var memail = $(this).find('input[name="mail"]').length > 0 ? $(this).find('input[name="mail"]').val() : true;
        var patternP = $(this).find('input[name="phone"]').length > 0 ? patternPhone.test(mphone) : true;
        var patternE = $(this).find('input[name="mail"]').length > 0 ? patternEmail.test(memail) : true;
        var patternEName = $(this).find('input[name="name"]').length > 0 ? patternEmpty.test(mname) : false;
        var patternENameComp = $(this).find('input[name="company-name"]').length > 0 ? patternEmpty.test(mnamec) : false;
        var patternEPhone = $(this).find('input[name="phone"]').length > 0 ? patternEmpty.test(mphone) : false;
        var patternEMail = $(this).find('input[name="mail"]').length > 0 ? patternEmpty.test(memail) : false;
        if (!patternPhone.test(mphone)) {
            $(this).find('input[name="phone"]').css({ 'border': '1px solid #c95656', 'background-color': '#fcdbdb' });
        }
        if (!patternEmail.test(memail)) {
            $(this).find('input[name="mail"]').css({ 'border': '1px solid #c95656', 'background-color': '#fcdbdb' });
        }
        if (patternENameComp || mnamec == "") {
            $(this).find('input[name="company-name"]').css({ 'border': '1px solid #c95656', 'background-color': '#fcdbdb' });
        }
        if (patternEPhone || mphone == "") {
            $(this).find('input[name="phone"]').css({ 'border': '1px solid #c95656', 'background-color': '#fcdbdb' });
        }
        if (patternEName || mname == "") {
            $(this).find('input[name="name"]').css({ 'border': '1px solid #c95656', 'background-color': '#fcdbdb' });
        }
        if (patternEMail || memail == "") {
            $(this).find('input[name="mail"]').css({ 'border': '1px solid #c95656', 'background-color': '#fcdbdb' });
        }

        console.log(patternP, patternE);
        if (mname && mnamec && mphone && memail && patternP && patternE && !patternEName && !patternEPhone && !patternEMail && !patternENameComp) {
            console.log('Валидно здесь.....');
            // var th = $(this);
            //
            // $.ajax({
            //     type: "POST",
            //     url: "mail.php", //Change
            //     data: th.serialize()
            // }).done(function() {
            //
            // });
            $('.thank-you-form').hide();
            $('.thank-you-finish').show();
        }
    });


});
console.log();