document.addEventListener('DOMContentLoaded', () => {
    // Games list
    const games = [
        { name: 'Subway Surfers', imageUrl: 'https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoVoIUtdewG4uJ_YuDRTwBxQy0qP8ylgazLLc01PBxbsFG1pGOWmqhZsxnNkrU3GXbdXIowBAstzlrhtQ4LCI4.png', link: 'player/index1.html' },
        { name: 'Subway Surfers', imageUrl: 'https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoVoIUtdewG4uJ_YuDRTwBxQy0qP8ylgazLLc01PBxbsFG1pGOWmqhZsxnNkrU3GXbdXIowBAstzlrhtQ4LCI4.png', link: 'player/index1.html' },
        { name: 'Subway Surfers', imageUrl: 'https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoVoIUtdewG4uJ_YuDRTwBxQy0qP8ylgazLLc01PBxbsFG1pGOWmqhZsxnNkrU3GXbdXIowBAstzlrhtQ4LCI4.png', link: 'player/index1.html' },
        { name: 'Subway Surfers', imageUrl: 'https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoVoIUtdewG4uJ_YuDRTwBxQy0qP8ylgazLLc01PBxbsFG1pGOWmqhZsxnNkrU3GXbdXIowBAstzlrhtQ4LCI4.png', link: 'player/index1.html' },
    // games will be added here
    ];

    const gameContainer = document.querySelector('.game-container');
    
    if (gameContainer) {
        games.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.classList.add('game-card');

            const gameImage = document.createElement('img');
            gameImage.src = game.imageUrl;
            gameImage.alt = game.name;
            gameCard.appendChild(gameImage);

            const gameName = document.createElement('h3');
            gameName.textContent = game.name;
            gameCard.appendChild(gameName);

            const gameLink = document.createElement('a'); 
            gameLink.href = game.link; 
            gameLink.target = '_self'; //opens on the same tab
            gameLink.textContent = 'Play Now'; 
            gameCard.appendChild(gameLink); 

            gameContainer.appendChild(gameCard);
        });
    } else {
        console.error('Game container not found!');
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


// Coin Counter Animation
let coins = 3200;
setInterval(() => {
    coins += Math.floor(Math.random() * 2); // Randomly add coins
    document.getElementById("coin-counter").innerText = coins.toLocaleString();
}, 5000); // Update every 5 seconds

document.addEventListener('DOMContentLoaded', () => { 
    const gameContainer = document.getElementById('gameContainer'); 
    games.forEach(game => { 
        const gameElement = document.createElement('div'); 
        gameElement.innerHTML = ` 
            <img src="${game.imageUrl}" alt="${game.name}"> 
            <h3>${game.name}</h3> 
            <a href="${game.link}" target="_self">Play Now</a> 
        `; 
        gameContainer.appendChild(gameElement); 
    });
});
