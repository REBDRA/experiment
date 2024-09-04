document.addEventListener("DOMContentLoaded", function() {
    const poemElement = document.getElementById("poem");
    const poemText = poemElement.textContent; // Get the text content, ignoring HTML tags
    const typingSpeed = 50; // Speed of typing in milliseconds

    let index = 0;
    poemElement.textContent = ""; // Clear the poem text initially

    function type() {
        if (index < poemText.length) {
            poemElement.textContent += poemText.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        }
    }

    type();

    // Pull to refresh logic
    let startY = 0;
    const refreshSpinner = document.querySelector('.refresh-spinner');
    let isRefreshing = false;

    window.addEventListener('touchstart', function(e) {
        startY = e.touches[0].clientY;
    });

    window.addEventListener('touchmove', function(e) {
        const currentY = e.touches[0].clientY;
        const diffY = currentY - startY;

        // If the user pulls down and the page is at the top
        if (diffY > 50 && window.scrollY === 0) {
            if (!isRefreshing) {
                isRefreshing = true;
                refreshSpinner.style.display = 'block'; // Show the spinner
                setTimeout(function() {
                    refreshSpinner.style.display = 'none'; // Hide the spinner before reloading
                    window.location.reload(); // Refresh the page
                }, 1000); // Adjust the delay as needed
            }
        }
    });

    window.addEventListener('touchend', function(e) {
        if (isRefreshing) {
            // Ensure spinner visibility is reset correctly
            setTimeout(() => {
                refreshSpinner.style.display = 'none'; // Hide the spinner
                isRefreshing = false;
            }, 1000); // Adjust timing to match the refresh delay
        }
    });

    // Scroll-triggered effects logic
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        // Example: Adjust the opacity of the poem based on scroll position
        const maxScroll = 200; // Adjust as needed for your use case
        const opacityValue = Math.min(1, scrollPosition / maxScroll);
        poemElement.style.opacity = opacityValue;

        // Example: Trigger an animation after scrolling past a certain point
        const animationTriggerPoint = 400; // Pixels scrolled before triggering
        if (scrollPosition > animationTriggerPoint) {
            poemElement.classList.add('animate-poem'); // Ensure this class has animation styles defined in your CSS
        } else {
            poemElement.classList.remove('animate-poem');
        }
    });
});
