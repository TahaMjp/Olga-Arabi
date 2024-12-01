$(document).ready(function() {

    $("#navBarItem-AboutMe").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#frame2").offset().top
        }, 1000);
    });
    $("#navBarItem-FAQ").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#frame7").offset().top
        }, 1000);
    });
    $("#navBarItem-Price").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#frame6").offset().top
        }, 1000);
    });
    $("#navBarItem-CONTACTS").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#frameContacts").offset().top
        }, 1000);
    });



})