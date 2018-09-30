$(document).ready(function () {
    $('.slider-block_slickk').slick({
        prevArrow:'<span class="prev"></span>',
        nextArrow:'<span class="next"></span>',
    });
    var trigger = $('#hamburger'),
        isClosed = true;

    trigger.click(function () {

        burgerTime();
    });

    function burgerTime() {
        if (isClosed ) {
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = false;

        } else {
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = true;
        }
    }
    $( "#hamburger" ).click(function() {
        $( ".header-block_menu" ).slideToggle( "slow", function() {
            // Animation complete.
        });
    });

});
