$(document).ready(function() {
    $('.accordion-item button').on('click', function() {
        var target = $(this).data('target');
        var content = $(target);

        // Toggle active state
        $(this).toggleClass('active');

        // Animate height for smooth opening/closing
        if (content.hasClass('hidden')) {
            content.removeClass('hidden').css('max-height', 'none'); // Set max-height to none first
            var height = content.outerHeight(); // Get the height after setting to none
            content.css('max-height', '0'); // Reset max-height to zero for animation
            setTimeout(() => {
                content.css('max-height', height + 'px'); // Animate to actual height
            }, 10);
        } else {
            content.css('max-height', content.outerHeight());
            setTimeout(() => {
                content.css('max-height', '0'); // Animate to zero height
                setTimeout(() => {
                    content.addClass('hidden'); // Hide after animation
                }, 500); // Match duration with CSS transition duration
            }, 10);
        }

        // Rotate icon
        $(this).find('[data-icon]').toggleClass('rotate-180');
    });
});