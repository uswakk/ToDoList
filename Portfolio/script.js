document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get values from form inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // You can now use these variables as needed, for example, send them to a server or display them on the page
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
});
