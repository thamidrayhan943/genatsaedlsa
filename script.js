document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.querySelector('.game-container');

    const loadGames = async () => {
        try {
            const response = await fetch('games.json');
            const games = await response.json();

            if (gameContainer) {
                gameContainer.innerHTML = ''; // Clear existing content
                games.forEach(game => {
                    const gameCard = document.createElement('div');
                    gameCard.classList.add('game-card');

                    const gameLink = document.createElement('a');
                    // Encode the game name to handle special characters in the URL
                    gameLink.href = `index1.html?game=${encodeURIComponent(game.name)}`;
                    gameLink.target = '_self';

                    const gameImage = document.createElement('img');
                    gameImage.src = game.image;
                    gameImage.alt = game.name;

                    const gameName = document.createElement('h3');
                    gameName.textContent = game.name;

                    gameLink.appendChild(gameImage);
                    gameLink.appendChild(gameName);
                    gameCard.appendChild(gameLink);
                    gameContainer.appendChild(gameCard);
                });
            } else {
                console.error('Game container not found!');
            }
        } catch (error) {
            console.error('Error loading games:', error);
        }
    };

    loadGames();

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

// Coin Counter Animation
let coins = 3200;
setInterval(() => {
    coins += Math.floor(Math.random() * 2); // Randomly add coins
    const coinCounter = document.getElementById("coin-counter");
    if (coinCounter) {
        coinCounter.innerText = coins.toLocaleString();
    }
}, 5000); // Update every 5 seconds