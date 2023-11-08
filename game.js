//initlising the score to the zero
let score = 0;
//first the cross(jump) mean the jump =true
let cross = true;
//giving background music for the game
let bgmMusic = new Audio("./assests/bgm2.mp3");
bgmMusic.play();
loop = true;

//giving the evenet listerners for the key
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
//function for movement of jump
function jump() {
    let dino = document.querySelector('.dino');
    if (!dino.classList.contains('animateDino')) {
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    }
}
//function for movement of left
function moveRight() {
    let dino = document.querySelector('.dino');
    let dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    if (dinoX < window.innerWidth - 180) {
        dino.style.left = (dinoX + 112) + 'px';
    }
}
//function for movement of left
function moveLeft() {
    let dino = document.querySelector('.dino');
    let dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    if (dinoX > 0) {
        dino.style.left = (dinoX - 112) + 'px';
    }
}
//getting the mathematical values for the movement of the deer and the cheetah by using the function .getComputedStyle()
//this function will take two arguments getElementById, querySelector or the ::after or ::before elements or if there is nothing else we will take null.
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
        dx < ox + obstacleWidth &&//matematic properties for the game over theme
        dx + dinoWidth > ox &&
        dy < oy + obstacleHeight &&
        dy + dinoHeight > oy
    ) {
        // Collision detected, end the game
        window.location.href = "./gameover.html"
        obstacle.style.animation = "none"; // Stop the obstacle animation
        bgmMusic.play();//playing the backgound music
        bgmMusic.pause();//after the game is over
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
//function for the score update
function updateScore(score) {
    let scoreCont = document.getElementById('scoreCont');
    scoreCont.innerHTML = "Your Score: " + score; // Set innerHTML to the score variable
    localStorage.setItem('scoreCont', score);
}

