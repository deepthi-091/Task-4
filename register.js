const session = JSON.parse(localStorage.getItem("sessionUser"));

if (session) {
  window.location.replace("home.html");
}

const form = document.getElementById("registerform");

const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

form.addEventListener("submit", function(e) {

e.preventDefault();

nameError.textContent="";
emailError.textContent="";
passwordError.textContent="";

const name = nameEl.value.trim();
const email = emailEl.value.trim().toLowerCase();
const password = passwordEl.value;

let valid=true;

if(!name){
nameError.textContent="Name required";
valid=false;
}

if(!email){
emailError.textContent="Email required";
valid=false;
}

if(!password || password.length<6){
passwordError.textContent="Password must be 6 characters";
valid=false;
}

if(!valid) return;

const users = JSON.parse(localStorage.getItem("users")) || [];

const exists = users.find(u=>u.email===email);

if(exists){
emailError.textContent="Email already registered";
return;
}

users.push({name,email,password});

localStorage.setItem("users",JSON.stringify(users));

localStorage.setItem("sessionUser",JSON.stringify({name,email}));

window.location.href="home.html";

});