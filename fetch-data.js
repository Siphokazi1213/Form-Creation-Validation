// Initialize an asynchronous function named fetchUserData
async function fetchUserData() {
  // Define the API URL
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  // Select the HTML element where the API data will be displayed
  const dataContainer = document.getElementById("api-data");

  // Employ a try-catch block to handle the fetching process and potential errors
  try {
    // Fetch data from the API URL using the await keyword
    const response = await fetch(apiUrl);

    // Check if the response was successful (status code 200-299)
    if (!response.ok) {
      // If response is not OK, throw an error to be caught by the catch block
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Convert the response to JSON
    const users = await response.json();

    // Clear the existing content (e.g., "Loading user data...") from the dataContainer
    dataContainer.innerHTML = "";

    // Create a <ul> element to hold the list of users
    const userList = document.createElement("ul");

    // Loop through the users array using forEach
    users.forEach((user) => {
      // Create an <li> element for each user
      const listItem = document.createElement("li");
      // Set the text content of the <li> to the user's name
      listItem.textContent = user.name;
      // Append the <li> to the <ul> element
      userList.appendChild(listItem);
    });

    // After the loop, append the completed <ul> (userList) to the dataContainer
    dataContainer.appendChild(userList);
  } catch (error) {
    // In the catch block, clear existing content of dataContainer
    dataContainer.innerHTML = "";
    // Set its text content to an error message
    dataContainer.textContent =
      "Failed to load user data. Please try again later.";
    console.error("Error fetching user data:", error); // Log the error for debugging
  }
}

// Outside fetchUserData, add an event listener to document for the DOMContentLoaded event.
// Set the callback function to invoke fetchUserData. This ensures your data fetching
// logic runs once the HTML document has fully loaded.
document.addEventListener("DOMContentLoaded", fetchUserData);
