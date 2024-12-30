// List of games with their respective URLs
const games = [
    { name: 'Roblox', url: 'https://files.ufreegame.net/1024/Subway-Surfers-Zurich/' },
    { name: 'Minecraft', url: 'https://files.ufreegame.net/1024/Subway-Surfers-Zurich/' },
    { name: 'Subway Surfers', url: 'https://files.ufreegame.net/1024/Subway-Surfers-Zurich/' }
];

const gameFrame = document.getElementById('gameFrame');
const gameButtons = document.querySelectorAll('.game-switcher button');
const volumeControl = document.getElementById('volumeControl');

// Load the default game (Roblox)
loadGame(games[0]);

function loadGame(game) {
    gameFrame.style.opacity = 0;
    setTimeout(() => {
        gameFrame.src = game.url;
        gameFrame.style.opacity = 1;
    }, 300);
}

// Function to change the game based on the button clicked
function changeGame(index) {
    gameButtons.forEach((button, idx) => {
        if (idx === index) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    const selectedGame = games[index];
    loadGame(selectedGame);
}

// Toggle fullscreen for the iframe
function toggleFullscreen() {
    if (gameFrame.requestFullscreen) {
        gameFrame.requestFullscreen();
    } else if (gameFrame.mozRequestFullScreen) { // Firefox
        gameFrame.mozRequestFullScreen();
    } else if (gameFrame.webkitRequestFullscreen) { // Chrome, Safari, Opera
        gameFrame.webkitRequestFullscreen();
    } else if (gameFrame.msRequestFullscreen) { // IE/Edge
        gameFrame.msRequestFullscreen();
    }
}

// Toggle mute on the iframe (game sound)
function toggleMute() {
    gameFrame.muted = !gameFrame.muted;
}

// Adjust the volume of the iframe
function adjustVolume(value) {
    gameFrame.volume = value;
}

// Toggle menu visibility
function toggleMenu() {
    const menuContent = document.querySelector('.menu-content');
    const menuButton = document.querySelector('.menu-button');
    
    menuContent.classList.toggle('show');
    menuButton.classList.toggle('active');
}

