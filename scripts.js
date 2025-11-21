document.addEventListener('DOMContentLoaded', () => {
    const gameFrame = document.getElementById('gameFrame');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const muteBtn = document.getElementById('muteBtn');
    const volumeControl = document.getElementById('volumeControl');

    const loadGame = async () => {
        try {
            const response = await fetch('games.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const games = await response.json();

            const urlParams = new URLSearchParams(window.location.search);
            const gameName = urlParams.get('game');

            if (gameFrame && gameName) {
                const game = games.find(g => g.name === gameName);
                if (game) {
                    gameFrame.src = game.url;
                } else {
                    console.error('Game not found!');
                    window.location.href = 'No-game.html';
                }
            } else if (!gameFrame) {
                console.error('gameFrame not found in the DOM.');
            }
        } catch (error) {
            console.error('Error loading games:', error);
        }
    };

    loadGame();

    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', () => {
            if (gameFrame.requestFullscreen) {
                gameFrame.requestFullscreen();
            } else if (gameFrame.mozRequestFullScreen) { // Firefox
                gameFrame.mozRequestFullScreen();
            } else if (gameFrame.webkitRequestFullscreen) { // Chrome, Safari, Opera
                gameFrame.webkitRequestFullscreen();
            } else if (gameFrame.msRequestFullscreen) { // IE/Edge
                gameFrame.msRequestFullscreen();
            }
        });
    }

    if (muteBtn) {
        muteBtn.addEventListener('click', () => {
            if(gameFrame) {
                gameFrame.muted = !gameFrame.muted;
                muteBtn.textContent = gameFrame.muted ? 'Unmute' : 'Mute';
            }
        });
    }

    if (volumeControl) {
        volumeControl.addEventListener('input', (e) => {
            if(gameFrame) {
                gameFrame.volume = e.target.value;
            }
        });
    }

    // Menu functionality
    const body = document.body;
    const menuButton = document.querySelector('.menu-button');
    const menuContent = document.querySelector('.menu-content');

    if (menuButton) {
        menuButton.addEventListener('click', () => {
            menuButton.classList.toggle('active');
            if (menuContent) {
                menuContent.classList.toggle('show');
            }
            body.classList.toggle('menu-open');
        });
    }
});