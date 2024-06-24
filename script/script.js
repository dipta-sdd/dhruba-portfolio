$(document).ready(function () {
  $("#contactForm").on("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Collect data from the form
    var sender = $("#sender").val();
    var interest = $("#interest").val();
    var email = $("#email").val();

    // Create an object to send to the server
    var formData = {
      sender: sender,
      interest: interest,
      email: email,
    };

    // Send the data using jQuery AJAX
    $.ajax({
      url: "/contact.php", // Replace with your API URL
      type: "POST",
      data: formData,
      success: function (response) {
        alert("Form submitted successfully");
      },
      error: function (xhr, status, error) {
        console.error("Error:", error);
        alert("Error submitting form");
      },
    });
  });
});
