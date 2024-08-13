window.onload = function() {
    const numberOfRoses = 30; // Adjust as needed
    const container = document.querySelector('.rose-rain');

    for (let i = 0; i < numberOfRoses; i++) {
        const rose = document.createElement('div');
        rose.classList.add('rose');
        rose.style.left = `${Math.random() * 100}vw`;
        rose.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(rose);
    }
};
