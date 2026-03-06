const sessionUser = JSON.parse(localStorage.getItem("sessionUser"))

if(!sessionUser){

    window.location.href="login.html"

}
document.getElementById("logout").addEventListener("click",function(){

    localStorage.removeItem("sessionUser")

    window.location.href="login.html"

})
