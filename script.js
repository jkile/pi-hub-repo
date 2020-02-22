let userName;
let password;

document.getElementById("signIn").addEventListener("click", function(){
    userName = document.getElementById("userName").value;
    document.getElementById("userName").value = "";
    password = document.getElementById("password").value;
    document.getElementById("password").value = "";
})


