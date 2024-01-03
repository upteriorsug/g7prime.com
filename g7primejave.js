
    // Custom script for continuous sliding
    $(document).ready(function () {
        var carousel = $("#imageCarousel");
        var items = $(".carousel-item");

        carousel.hover(
            function () {
                // Pause on hover
                carousel.carousel('pause');
            },
            function () {
                // Resume on hover out
                carousel.carousel();
            }
        );

        // Continuously slide
        setInterval(function () {
            var activeItem = carousel.find('.active');
            var nextItem = activeItem.next();

            if (nextItem.length === 0) {
                nextItem = items.first();
            }

            carousel.carousel('next');
        }, 2000); // Adjust the interval as needed
    });

    // script.js
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".btn1").forEach(function(button) {
      button.classList.remove("hidden");
    });
  });