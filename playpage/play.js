//giving background music for the game
let bgmMusic = new Audio("./assests/bgm1.mp3");
bgmMusic.play();
loop = true;
  // Get references to the input fields and the "Save Data" button
  const nameInput = document.getElementById("nameInput");
  const ageInput = document.getElementById("ageInput");
  const squadInput = document.getElementById("squadInput");
  const saveButton = document.getElementById("saveData");

  // Event listener for the button click
  saveButton.addEventListener("click", () => {
      // Get values from input fields
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