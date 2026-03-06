

const navigateuser = localStorage.getItem("validuser")

if(navigateuser){
    window.location.href="login.html"
}

const form=document.getElementById("registerform")

form.addEventListener("submit",function(e){
    e.preventDefault()

    const name=document.getElementById("name").value
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value

    let users=JSON.parse(localStorage.getItem("users")) || []

    const exists=users.find(user=>user.email===email)

    if(exists){
        alert("User already exists");
    }

    const user={name,email,password}
    users.push(user)
    localStorage.setItem("users",JSON.stringify(users))
    localStorage.setItem("validuser",JSON.stringify(user))
    window.location.href="login.html"
    form.reset();
})
