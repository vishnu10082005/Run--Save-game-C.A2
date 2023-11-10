let bgmMusic = new Audio("./assests/bgm2.mp3");
bgmMusic.loop = true; // Set loop to true
bgmMusic.play();

let scoreUpdate = localStorage.getItem('scoreCont');

// Recive the data from local storage
const playerData = JSON.parse(localStorage.getItem("playerData"));

// Display the data on the second page
if (playerData) {
  document.getElementById("nameOutput").textContent = playerData.name;//selecting the id of the name and getting out put for that player
  document.getElementById("ageOutput").textContent = playerData.age;//selecting the id of the age and getting out put for that player
  document.getElementById("squadOutput").textContent = playerData.squad;
}//selecting the id of the squad and getting out put for that player
let homeChange = document.querySelector(".Home")
homeChange.addEventListener("click", changes1)
function changes1() {
  window.location.href = './playpage/play.html'
}
let replayChange = document.querySelector(".Replay")
replayChange.addEventListener("click", changes)
function changes() {
  window.location.href = './game.html'
}

// Retrieve the stored score from local storage
const storedScore = localStorage.getItem('score');

let scoreDisplay = document.getElementById('scoreDisplay');
scoreDisplay.innerHTML = `Your score is: ${storedScore}`;