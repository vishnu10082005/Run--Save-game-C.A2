// Initializing the score to zero
let score = 0;
// Flag for jump
let cross = true;
// Background music for the game
let bgmMusic = new Audio("./assests/bgm2.mp3");
bgmMusic.play();
loop = true;

// Event listeners for key events
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

// Function for the jump movement
function jump() {
    let deer = document.querySelector('.Deer');
    if (!deer.classList.contains('animateDeer')) {
        deer.classList.add('animateDeer');
        setTimeout(() => {
            deer.classList.remove('animateDeer');
        }, 700);
    }
}


// Function for the right movement
function moveRight() {
    let deer = document.querySelector('.Deer');
    let deerX = parseInt(window.getComputedStyle(deer, null).getPropertyValue('left'));
    if (deerX < window.innerWidth - 180) {
        deer.style.left = (deerX + 112) + 'px';
    }
}

// Function for the left movement
function moveLeft() {
    let deer = document.querySelector('.Deer');
    let deerX = parseInt(window.getComputedStyle(deer, null).getPropertyValue('left'));
    if (deerX > 0) {
        deer.style.left = (deerX - 112) + 'px';
    }
}

// Getting the mathematical values for the movement of the deer and the cheetah
setInterval(() => {
    let deer = document.querySelector('.Deer');
    let gameOver = document.querySelector('.gameOver');
    let cheetah = document.querySelector('.Cheetah');

    let dx = parseInt(window.getComputedStyle(deer, null).getPropertyValue('left'));
    let dy = parseInt(window.getComputedStyle(deer, null).getPropertyValue('top'));

    let ox = parseInt(window.getComputedStyle(cheetah, null).getPropertyValue('left'));
    let oy = parseInt(window.getComputedStyle(cheetah, null).getPropertyValue('top'));

    let deerW = parseInt(window.getComputedStyle(deer, null).getPropertyValue('width'));
    let deerH = parseInt(window.getComputedStyle(deer, null).getPropertyValue('height'));
    let cheetahW = parseInt(window.getComputedStyle(cheetah, null).getPropertyValue('width'));
    let cheetahH = parseInt(window.getComputedStyle(cheetah, null).getPropertyValue('height'));

    if (
        dx < ox + cheetahW &&
        dx + deerW > ox &&
        dy < oy + cheetahH &&
        dy + deerH > oy
    ) {
        // Collision detected, end the game
        window.location.href = "./gameover.html"
        cheetah.style.animation = "none"; // Stop the obstacle animation
        bgmMusic.play(); // playing the background music
        bgmMusic.pause(); // after the game is over
    } else if (dx > ox + cheetahW && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            let aniDur = parseFloat(window.getComputedStyle(cheetah, null).getPropertyValue('animation-duration'));
            let newDur = aniDur - 0.1;
            cheetah.style.animationDuration = newDur + 's';
        }, 500);
    }
}, 10);

// Function for the score update
function updateScore(score) {
    let scoreCont = document.getElementById('scoreCont');
    scoreCont.innerHTML = "Your Score: " + score; // Set innerHTML to the score variable
    localStorage.setItem('scoreCont', score);
}
