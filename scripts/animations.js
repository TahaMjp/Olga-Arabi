$(document).ready(function() {
    function isInViewport(element) {
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    }

    $(window).on('scroll resize', function() {
        if (isInViewport('#frame3div1')) {
            $('#frame3div1').show().animate({
                left: '0' // Move to its normal position
            }, 1500); // Duration of the animation in milliseconds
        }
    });
    $(window).on('scroll resize', function() {
        if (isInViewport('#frame3div2')) {
            $('#frame3div2').show().animate({
                left: '0' // Move to its normal position
            }, 1500); // Duration of the animation in milliseconds
        }
    });
    $(window).on('scroll resize', function() {
        if (isInViewport('#frame3div3')) {
            $('#frame3div3').show().animate({
                left: '0' // Move to its normal position
            }, 1500); // Duration of the animation in milliseconds
        }
    });
    $(window).on('scroll resize', function() {
        if (isInViewport('#frame3div4')) {
            $('#frame3div4').show().animate({
                left: '0' // Move to its normal position
            }, 1500); // Duration of the animation in milliseconds
        }
    });
    $(window).on('scroll resize', function() {
        if (isInViewport('#frame3div5')) {
            $('#frame3div5').show().animate({
                left: '0' // Move to its normal position
            }, 1500); // Duration of the animation in milliseconds
        }
    });
    $(window).on('scroll resize', function() {
        if (isInViewport('#frame3div6')) {
            $('#frame3div6').show().animate({
                left: '0' // Move to its normal position
            }, 1500); // Duration of the animation in milliseconds
        }
    });

});