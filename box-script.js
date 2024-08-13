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
