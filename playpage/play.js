function submitDetails() {
    const name = document.getElementById("nameInput").value;
    const age = document.getElementById("ageInput").value;
    const squad = document.getElementById("squadInput").value;

    // Send the data to the backend (you will need to set up a backend to handle this)
    // Example: You can use fetch to send the data to the backend API
    fetch("/api/storeDetails", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age, squad }),
    })
        .then(response => response.json())
        .then(data => {
            // Redirect to the other page after successful submission
            window.location.href = "leadership.html";
        })
        .catch(error => console.error("Error:", error));
}
