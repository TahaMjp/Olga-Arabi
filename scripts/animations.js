$(document).ready(function() {
    $(window).on('scroll', function() {
        $('.translate-x-neg-full').each(function() {
            var elementTop = $(this).offset().top;
            var windowTop = $(window).scrollTop() + $(window).height();

            if (windowTop > elementTop) {
                $(this).removeClass('translate-x-neg-full').addClass('translate-x-0');
            }
        });
    });
    $("#frameOnePicture").removeClass('translate-x-neg-full').addClass('translate-x-0');
});