document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Collect data from the form
  const sender = document.getElementById("sender").value;
  const interest = document.getElementById("interest").value;
  const email = document.getElementById("email").value;

  // Create an object to send to the server
  const formData = {
    sender: sender,
    interest: interest,
    email: email,
  };

  // Send the data using Fetch API
  fetch("contact.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Form submitted successfully");
      } else {
        alert("Error submitting form");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error submitting form");
    });
});
