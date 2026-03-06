
const form=document.getElementById("loginform");

form.addEventListener("submit",function(e){

    e.preventDefault()

    const email=document.getElementById("email").value
    const password=document.getElementById("password").value

    const users=JSON.parse(localStorage.getItem("users")) || []

    const knownuser=users.find(user=>user.email === email && user.password === password)

    if(!knownuser){
        alert("Invalid credentials")
    }
    window.location.href="home.html";

})