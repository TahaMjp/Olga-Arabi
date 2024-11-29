// script.js

$(document).ready(function() {
    let prevScrollpos = $(window).scrollTop();
    const navbar = $('#navbar');
    let isAnimating = false; // Flag to prevent multiple animations

    $(window).scroll(function() {
        let currentScrollPos = $(window).scrollTop();

        // Check if we are already animating
        if (isAnimating) return;

        if (currentScrollPos > prevScrollpos) {
            // Scrolling down
            if (navbar.is(':hidden')) {
                isAnimating = true; // Set animating flag
                navbar.stop(true, true).fadeIn(300, function() {
                    isAnimating = false; // Reset animating flag after fadeIn completes
                });
            }
        } else {
            // Scrolling up
            if (navbar.is(':visible')) {
                isAnimating = true; // Set animating flag
                navbar.stop(true, true).fadeOut(300, function() {
                    isAnimating = false; // Reset animating flag after fadeOut completes
                });
            }
        }

        prevScrollpos = currentScrollPos; // Update previous scroll position
    });
});