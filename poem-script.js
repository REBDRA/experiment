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
    const refreshMessage = document.querySelector('.refresh-message');
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
                refreshMessage.style.display = 'block'; // Show the refresh message
                setTimeout(function() {
                    window.location.reload(); // Refresh the page after a short delay
                }, 1000); // Adjust the delay as needed
            }
        }
    });

    window.addEventListener('touchend', function(e) {
        if (isRefreshing) {
            setTimeout(() => {
                refreshMessage.style.display = 'none'; // Ensure the refresh message is hidden
                isRefreshing = false;
            }, 1000); // Hide message after refresh delay
        }
    });
});
