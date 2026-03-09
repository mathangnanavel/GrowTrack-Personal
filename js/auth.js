const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e) {

e.preventDefault();

// get values
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

// save user name
localStorage.setItem("user", username);

// login status
localStorage.setItem("loggedIn", "true");

// redirect
window.location.href = "dashboard.html";

});