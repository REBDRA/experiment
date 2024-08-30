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
            setTimeout(() => {
                refreshSpinner.style.display = 'none'; // Ensure the spinner is hidden
                isRefreshing = false;
            }, 1000); // Hide spinner after refresh delay
        }
    });
});
