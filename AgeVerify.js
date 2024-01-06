 // Function to handle age verification
 function verifyAge() {
    // Get the age from the input field
    var age = parseInt(document.getElementById("ageInput").value);

    // Check if the age is less than 18
    if (age < 18) {
        // Hide the banner section
        $(".Bn-section").hide(); 
        // Show a message for children
        alert("You are a child!");
    } else if (age >= 18 && age <= 100) {
        // Show a message for adults
        document.write("You are an adult!");
    } else {
        // Handle other cases if needed
        alert("Please enter a valid age between 1 and 100.");
    }
}