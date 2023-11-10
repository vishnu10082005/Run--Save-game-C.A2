//giving background music for the game
let bgmMusic = new Audio("./assests/bgm1.mp3");
bgmMusic.play();
loop = true;
  // Get  to the input values and the "Save Data" button
  
  const nameInput = document.getElementById("nameInput");
  const ageInput = document.getElementById("ageInput");
  const squadInput = document.getElementById("squadInput");
  const saveButton = document.getElementById("saveData");

  // Event listener for the button click
  saveButton.addEventListener("click", () => {
      // Get values from input.value
      const name = nameInput.value;
      const age = ageInput.value;
      const squad = squadInput.value;

      // Create an object to store the data
      const data = {
          name,
          age,
          squad,
      };

      // Store the data in local storage as a JSON string
      localStorage.setItem("playerData", JSON.stringify(data));
  });
  let windowChange = document.querySelector(".playbtn")
  windowChange.addEventListener("click",change)
  function change(){
    window.location.href = './../game.html'
  }

  let instructionChange = document.querySelector(".instruction")
  instructionChange.addEventListener("click",changes)
  function changes(){
    window.location.href = './instruction.html'
  }
