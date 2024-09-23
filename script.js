document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;
    let course = document.getElementById("course").value;

    let message = `Thank you, ${name}! You have successfully registered for the ${course} course.`;
    document.getElementById("message").textContent = message;
});
