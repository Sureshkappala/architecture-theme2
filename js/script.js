function login(){

let username =
document.getElementById(
"username"
)?.value;

let password =
document.getElementById(
"password"
)?.value;

if(
username === ""
||
password === ""
){

alert(
"Enter username and password"
);

return;

}

localStorage.setItem(
"username",
username
);

window.location=
"index.html";

}

let user =
localStorage.getItem(
"username"
);

if(
user &&
document.getElementById(
"welcomeUser"
)
){

document.getElementById(
"welcomeUser"
).innerText =

"Hello, " + user;

}