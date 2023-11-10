let score = 0;
let crossed = true; // Initialize as true to allow the initial crossing
let gameover = false;

const audio = new Audio('music.mp3');
const bgmMusic = new Audio('bgmusic.mp3'); // Add this line with the correct file name
const audiogo = new Audio('gameover.mp3');
const Deer = document.querySelector('.Deer');
const Cheetah = document.querySelector('.Cheetah');
const gameOver = document.querySelector('.gameOver');
const scoreCont = document.getElementById('scoreCont');

setTimeout(() => {
    audio.play();
}, 1000);

document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode);
    if (e.keyCode == 38) {
        Deer.style.animation = 'none';
        setTimeout(() => {
            Deer.style.animation = 'DeerJump 1s linear';
        }, 50);
    }
    if (e.keyCode == 39) {
        const DeerX = parseInt(window.getComputedStyle(Deer, null).getPropertyValue('left'));
        Deer.style.left = DeerX + 112 + "px";
    }
    if (e.keyCode == 37) {
        const DeerX = parseInt(window.getComputedStyle(Deer, null).getPropertyValue('left'));
        Deer.style.left = (DeerX - 112) + "px";
    }
}
//setting the interval for the jump ,cross ,score,
setInterval(() => {
    let deer = document.querySelector('.Deer');
    let cheetah = document.querySelector('.Cheetah');

    let dx = parseInt(window.getComputedStyle(deer, null).getPropertyValue('left'));
    let dy = parseInt(window.getComputedStyle(deer, null).getPropertyValue('bottom'));

    let ox = parseInt(window.getComputedStyle(cheetah, null).getPropertyValue('left'));
    let oy = parseInt(window.getComputedStyle(cheetah, null).getPropertyValue('bottom'));

    let deerW = parseInt(window.getComputedStyle(deer, null).getPropertyValue('width'));
    let deerH = parseInt(window.getComputedStyle(deer, null).getPropertyValue('height'));
    let cheetahW = parseInt(window.getComputedStyle(cheetah, null).getPropertyValue('width'));
    let cheetahH = parseInt(window.getComputedStyle(cheetah, null).getPropertyValue('height'));

    // Adjust the offset conditions based on the Deer and Cheetah dimensions
    const offsetX = Math.abs(dx - ox);
    const offsetY = Math.abs(dy - oy);
//mathematical agenda fir the game over
    if (
        dx < ox + cheetahW &&
        dx + deerW > ox &&
        dy < oy + cheetahH &&
        dy + deerH > oy
    ) {
        // Collision detected, end the game
        window.location.href = "./gameover.html";
        cheetah.style.animation = "none"; // Stop the obstacle animation
        audiogo.play(); // Play game over sound
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    } else if (offsetX < 90 && crossed) {
        // Adjusted the offsetX condition for the score increase
        score += 1;
        updateScore(score);
        crossed = false;
        setTimeout(() => {
            crossed = true;
        }, 1000);
        setTimeout(() => {
            const aniDur = parseFloat(window.getComputedStyle(Cheetah, null).getPropertyValue('animation-duration'));
            const newDur = aniDur - 0.1;
            Cheetah.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur);
        }, 500);

        // Log the values after the score is updated
        console.log('offsetX:', offsetX, 'offsetY:', offsetY, 'crossed:', crossed);
    }
}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score;
    localStorage.setItem('score', score);

}
