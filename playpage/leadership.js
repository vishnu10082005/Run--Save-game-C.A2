// Fetch user details from the backend (you will need to set up a backend to handle this)
fetch("/api/getDetails")
    .then(response => response.json())
    .then(data => {
        const userDetailsTable = document.getElementById("userDetailsTable");

        // Loop through the data and create table rows for each user
        data.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.squad}</td>
            `;
            userDetailsTable.appendChild(row);
        });
    })
    .catch(error => console.error("Error:", error));
