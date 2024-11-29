$(document).ready(function() {

    $("#navBarItem-AboutMe").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#frame2").offset().top
        }, 1000);
    });
    $("#navBarItem-FAQ").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#frame5").offset().top
        }, 1000);
    });

})