let userName;
let password;
let user = {userName, password}
document.getElementById("signIn").addEventListener("click", function(){
    user.userName = document.getElementById("userName").value;
    document.getElementById("userName").value = "";
    user.password = document.getElementById("password").value;
    document.getElementById("password").value = "";

})


