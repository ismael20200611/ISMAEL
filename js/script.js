document.addEventListener('DOMContentLoaded', function() {
    $('#book').turn({
        width: 900,  // Must match width in CSS
        height: 600, // Must match height in CSS
        autoCenter: true,
        acceleration: true, // Smoother animation
        gradients: true,    // Adds subtle shadows for depth
        elevation: 50,      // Shadow elevation
        pages: 6,           // Total number of pages (including covers)
        duration: 800       // Animation duration in milliseconds
    });

    // Optional: Hide controls if you want only drag-to-turn
    // $('.book-controls').hide();

    // Initial "open book" animation
    // When the page loads, automatically turn to page 2 (to reveal the first content page)
    // You can adjust the delay or even make it triggered by a user click
    setTimeout(function() {
        $('#book').turn('page', 2);
    }, 1000); // Opens to page 2 after 1 second


    // Navigation controls
    $('#next-page').click(function() {
        $('#book').turn('next');
    });

    $('#prev-page').click(function() {
        $('#book').turn('previous');
    });

    // Handle responsiveness (optional but recommended)
    $(window).resize(function(){
        $('#book').turn('size', $(window).width()*0.8, $(window).height()*0.8);
    }).bind('mousewheel', function(e) { // Enable mousewheel scrolling (optional)
        e.preventDefault();
        var delta = e.originalEvent.wheelDelta/120 || -e.originalEvent.detail/3;
        if (delta>0)
            $('#book').turn('previous');
        else
            $('#book').turn('next');
    });

    // You can also add event listeners for when a page turns
    $('#book').bind('turned', function(event, page, view) {
        console.log('Current page: ' + page);
        // You could update a URL hash, or change content based on the page here
    });
});