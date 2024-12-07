document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.getElementById('snow-container');
    
    // Function to create snowflakes
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowContainer.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }

    setInterval(createSnowflake, 100);

    // Surprise message
    const button = document.getElementById('surpriseButton');
    button.addEventListener('click', () => {
        alert("Surprise! You are a wonderful friend.Wishing you a season filled with happiness, good health, and joy. May your heart be as full as a well-prescribed dose of holiday cheer! Don't worry, A little Gift is waiting for you.Till then,Stay blessed and take care! 🎄🎉");
    });
});
