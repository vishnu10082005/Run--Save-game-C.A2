let bgmMusic = new Audio("./assests/bgm2.mp3");
bgmMusic.loop = true; // Set loop to true
bgmMusic.play();

let scoreUpdate = localStorage.getItem('scoreCont');
let score = document.getElementById('score');
score.innerHTML = `Your score is: ${scoreUpdate}`;
