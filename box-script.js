function openBox() {
    const box = document.querySelector('.box');
    const lid = document.querySelector('.lid');

    // Add classes to trigger the open box animation
    box.classList.add('open');
    lid.classList.add('open');

    // Redirect to the poem page after the animation completes
    setTimeout(() => {
        window.location.href = 'poem.html';
    }, 1000); // Adjust this delay to match the duration of the animation
}
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
