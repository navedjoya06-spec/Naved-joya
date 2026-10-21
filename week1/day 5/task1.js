// TASK 1

let text = document.getElementById("text");
let size = 25;

function red() {
    text.style.color = "red";
}

function green() {
    text.style.color = "green";
}

function blue() {
    text.style.color = "blue";
}

function changeFont(font) {
    text.style.fontFamily = font;
}

function increase() {
    size = size + 2;
    text.style.fontSize = size + "px";
}

function decrease() {
    size = size - 2;
    text.style.fontSize = size + "px";
}

function bold() {
    text.style.fontWeight = "bold";
}

function italic() {
    text.style.fontStyle = "italic";
}

function underline() {
    text.style.textDecoration = "underline";
}


// TASK 2

function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let message = document.getElementById("message");

    if (name == "" || email == "" || mobile == "") {

        message.innerHTML = "Please fill all fields!";
        message.style.color = "red";

    } else {

        message.innerHTML = "Form submitted successfully!";
        message.style.color = "green";
    }

    return false;
}


// TASK 3

function add() {

    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    if (a == "" || b == "") {
        document.getElementById("result").innerHTML =
        "Please enter both numbers!";
    } else {
        document.getElementById("result").innerHTML =
        "Result = " + (Number(a) + Number(b));
    }
}


function subtract() {

    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    if (a == "" || b == "") {
        document.getElementById("result").innerHTML =
        "Please enter both numbers!";
    } else {
        document.getElementById("result").innerHTML =
        "Result = " + (Number(a) - Number(b));
    }
}


function multiply() {

    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    if (a == "" || b == "") {
        document.getElementById("result").innerHTML =
        "Please enter both numbers!";
    } else {
        document.getElementById("result").innerHTML =
        "Result = " + (Number(a) * Number(b));
    }
}


function divide() {

    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    if (a == "" || b == "") {

        document.getElementById("result").innerHTML =
        "Please enter both numbers!";

    } else if (Number(b) == 0) {

        document.getElementById("result").innerHTML =
        "Cannot divide by zero!";

    } else {

        document.getElementById("result").innerHTML =
        "Result = " + (Number(a) / Number(b));
    }
}
// BONUS TASK - Theme Switcher

function lightMode() {
    document.body.classList.remove("dark");
}

function darkMode() {
    document.body.classList.add("dark");
}