// Ensure the script runs only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select the form element using its ID
  const form = document.getElementById("registration-form");

  // Select the feedback division using its ID
  const feedbackDiv = document.getElementById("form-feedback");

  // Add an event listener for the form's submit event
  form.addEventListener("submit", (event) => {
    // Prevent the default form submission behavior (which would reload the page)
    event.preventDefault();

    // Retrieve the values from the input fields and trim any leading/trailing whitespace
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Initialize a boolean variable to track the overall validation status
    let isValid = true;
    // Initialize an array to store any validation error messages
    const messages = [];

    // --- Username Validation ---
    // Check if the username length is less than 3 characters
    if (username.length < 3) {
      isValid = false; // Set isValid to false if validation fails
      messages.push("Username must be at least 3 characters long."); // Add error message
    }

    // --- Email Validation ---
    // Check if the email includes both '@' and '.' characters
    // This is a basic check and can be enhanced with regex for more robust validation
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false; // Set isValid to false if validation fails
      messages.push(
        "Please enter a valid email address (must include @ and .)."
      ); // Add error message
    }

    // --- Password Validation ---
    // Check if the password length is less than 8 characters
    if (password.length < 8) {
      isValid = false; // Set isValid to false if validation fails
      messages.push("Password must be at least 8 characters long."); // Add error message
    }

    // --- Displaying Feedback ---
    // Make the feedback div visible
    feedbackDiv.style.display = "block";
    // Clear any existing classes to reset styling
    feedbackDiv.classList.remove("error", "success");

    // If all validations passed (isValid is true)
    if (isValid) {
      // Set the text content to a success message
      feedbackDiv.textContent = "Registration successful!";
      // Add the 'success' class for green styling
      feedbackDiv.classList.add("success");
    } else {
      // If any validation failed
      // Join the error messages with <br> tags to display them on separate lines
      feedbackDiv.innerHTML = messages.join("<br>");
      // Add the 'error' class for red styling
      feedbackDiv.classList.add("error");
    }
  });
});
