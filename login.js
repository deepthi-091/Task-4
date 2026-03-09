const session = JSON.parse(localStorage.getItem("sessionUser"));

if (session) {
  window.location.replace("home.html");
}

const form = document.getElementById("loginform");

const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");

const emailError = document.getElementById("login-email-error");
const passwordError = document.getElementById("login-password-error");

const formError = document.getElementById("loginformerror");

form.addEventListener("submit",function(e){

e.preventDefault();

emailError.textContent="";
passwordError.textContent="";
formError.textContent="";

const email=emailEl.value.trim().toLowerCase();
const password=passwordEl.value;

let valid=true;

if(!email){
emailError.textContent="Email required";
valid=false;
}

if(!password){
passwordError.textContent="Password required";
valid=false;
}

if(!valid) return;

const users = JSON.parse(localStorage.getItem("users")) || [];

const user = users.find(u=>u.email===email && u.password===password);

if(!user){
formError.textContent="Invalid email or password";
return;
}

localStorage.setItem("sessionUser",JSON.stringify({name:user.name,email:user.email}));

window.location.href="home.html";

});