let score = 0;
let cross = true;

let audio = new Audio('music.mp3');
let audiogo = new Audio('gameover.mp3');
audio.volume = 0.2; // Adjust the audio volume as needed

setTimeout(() => {
    audio.play();
}, 1000);

document.onkeydown = function (e) {
    if (e.keyCode == 38 && cross) {
        jump();
    }
    if (e.keyCode == 39) {
        moveRight();
    }
    if (e.keyCode == 37) {
        moveLeft();
    }
}

function jump() {
    let dino = document.querySelector('.dino');
    if (!dino.classList.contains('animateDino')) {
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    }
}

function moveRight() {
    let dino = document.querySelector('.dino');
    let dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    if (dinoX < window.innerWidth - 180) {
        dino.style.left = (dinoX + 112) + 'px';
    }
}

function moveLeft() {
    let dino = document.querySelector('.dino');
    let dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    if (dinoX > 0) {
        dino.style.left = (dinoX - 112) + 'px';
    }
}

setInterval(() => {
    let dino = document.querySelector('.dino');
    let gameOver = document.querySelector('.gameOver');
    let obstacle = document.querySelector('.obstacle');

    let dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    let dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    let ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    let oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    let dinoWidth = parseInt(window.getComputedStyle(dino, null).getPropertyValue('width'));
    let dinoHeight = parseInt(window.getComputedStyle(dino, null).getPropertyValue('height'));
    let obstacleWidth = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('width'));
    let obstacleHeight = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('height'));

    if (
        dx < ox + obstacleWidth &&
        dx + dinoWidth > ox &&
        dy < oy + obstacleHeight &&
        dy + dinoHeight > oy
    ) {
        // Collision detected, end the game
        gameOver.innerHTML = "Game Over - Reload to Play Again";
        obstacle.style.animation = "none"; // Stop the obstacle animation
        audiogo.play();
        audio.pause();
    } else if (dx > ox + obstacleWidth && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            let aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            let newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);
    }
}, 10);

function updateScore(score) {
    let scoreCont = document.getElementById('scoreCont');
    scoreCont.innerHTML = "Your Score: " + score;
}
