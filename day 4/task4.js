// Task 1: Functions Practice

// 1. Normal Parameterized Function
// Function to calculate area of rectangle

function rectangleArea(length, width) {
    return length * width;
}

let area = rectangleArea(10, 5);
console.log("Area of Rectangle =", area);


// 2. Arrow Function
// Function to check voter eligibility

const checkVoter = (age) => {
    if (age > 18) {
        return "Eligible to Vote";
    } else {
        return "Not Eligible to Vote";
    }
};

console.log(checkVoter(20));
console.log(checkVoter(17));

        // Ask user's name
        let name = prompt("Please enter your name:");

        // Display name dynamically
        document.getElementById("welcome").innerText = "Welcome, " + name + "!";
