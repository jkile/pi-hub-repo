//import { axios } from "./node_modules/axios/index.js";

let userName;
let password;
let user = {userName, password}
document.getElementById("signIn").addEventListener("click", async function(event){
    event.preventDefault();
    user.userName = document.getElementById("userName").value;
    document.getElementById("userName").value = "";
    user.password = document.getElementById("password").value;
    
    try{
        await axios.post("/users/login", {
            email: user.userName,
            password: user.password
        });
        window.location.assign('/home')

    } catch (e){
        console.log(e);
    }
    

})


