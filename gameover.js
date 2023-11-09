let bgmMusic = new Audio("./assests/bgm2.mp3");
bgmMusic.loop = true; // Set loop to true
bgmMusic.play();

let scoreUpdate = localStorage.getItem('scoreCont');
let score = document.getElementById('score');
score.innerHTML = `Your score is: ${scoreUpdate}`;
    // Recive the data from local storage
    const playerData = JSON.parse(localStorage.getItem("playerData"));

    // Display the data on the second page
    if (playerData) {
        document.getElementById("nameOutput").textContent = playerData.name;//selecting the id of the name and getting out put for that player
        document.getElementById("ageOutput").textContent = playerData.age;//selecting the id of the age and getting out put for that player
        document.getElementById("squadOutput").textContent = playerData.squad;}//selecting the id of the squad and getting out put for that player
        let homeChange = document.querySelector(".Home")
        homeChange.addEventListener("click",changes1)
        function changes1(){
          window.location.href = './playpage/play.html'
        }
        let replayChange = document.querySelector(".Replay")
        replayChange.addEventListener("click",changes)
        function changes(){
          window.location.href = './game.html'
        }

            