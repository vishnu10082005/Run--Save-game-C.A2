let bgmMusic = new Audio("./assests/bgm2.mp3");
bgmMusic.loop = true; // Set loop to true
bgmMusic.play();

let scoreUpdate = localStorage.getItem('scoreCont');
let score = document.getElementById('score');
score.innerHTML = `Your score is: ${scoreUpdate}`;
    // Retrieve the data from local storage
    const playerData = JSON.parse(localStorage.getItem("playerData"));

    // Display the data on the second page
    if (playerData) {
        document.getElementById("nameOutput").textContent = playerData.name;
        document.getElementById("ageOutput").textContent = playerData.age;
        document.getElementById("squadOutput").textContent = playerData.squad;}