const session = JSON.parse(localStorage.getItem("sessionUser"));

if(!session){
window.location.replace("login.html");
}

const welcome = document.getElementById("welcome");
const logoutBtn = document.getElementById("logout-btn");

welcome.textContent = "Welcome " + session.name + "!";

logoutBtn.addEventListener("click", function(){

localStorage.removeItem("sessionUser");

window.location.replace("login.html");

});