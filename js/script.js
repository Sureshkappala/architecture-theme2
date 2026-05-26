function login(){

let username =
document.getElementById(
"username"
)?.value;

let email =
document.getElementById(
"email"
)?.value;

let password =
document.getElementById(
"password"
)?.value;

if(
username === ""
||
email === ""
||
password === ""
){

alert(
"Fill all fields"
);

return;

}

localStorage.setItem(
"username",
username
);

window.location =
"index.html";

}

/* WELCOME MESSAGE */

let user =
localStorage.getItem(
"username"
);

let welcome =
document.getElementById(
"welcomeUser"
);

if(
user &&
welcome
){

welcome.innerText =
"Hello, " + user;

}

/* TOP BUTTON */

function goTop(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
