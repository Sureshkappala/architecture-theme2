function login(){

let email =
document.getElementById(
"email"
)?.value;

let password =
document.getElementById(
"password"
)?.value;

if(
email === ""
||
password === ""
){

alert(
"Enter email and password"
);

return;

}

localStorage.setItem(
"username",
email.split("@")[0]
);

window.location =
"index.html";

}

/* USERNAME */

let user =
localStorage.getItem(
"username"
);

let welcome =
document.getElementById(
"welcomeUser"
);

if(
user
&&
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
function register(){

let first =
document.getElementById(
"firstName"
)?.value;

let last =
document.getElementById(
"lastName"
)?.value;

let email =
document.getElementById(
"registerEmail"
)?.value;

let password =
document.getElementById(
"registerPassword"
)?.value;

let confirm =
document.getElementById(
"confirmPassword"
)?.value;

if(
!first||
!last||
!email||
!password||
!confirm
){

alert(
"Fill all fields"
);

return;

}

if(
password!==confirm
){

alert(
"Passwords do not match"
);

return;

}

localStorage.setItem(
"userName",
first
);

localStorage.setItem(
"userEmail",
email
);

localStorage.setItem(
"userPassword",
password
);

alert(
"Account created successfully!"
);

window.location=
"login.html";

}
function selectRole(role){

let client =
document.getElementById(
"client"
);

let admin =
document.getElementById(
"admin"
);

client.classList.remove(
"active"
);

admin.classList.remove(
"active"
);

if(
role==="client"
){

client.classList.add(
"active"
);

}else{

admin.classList.add(
"active"
);

}

}
function resetPassword(){

let email =
document.getElementById(
"resetEmail"
)?.value;

if(
email===""
){

alert(
"Enter email"
);

return;

}

alert(
"Reset link sent successfully"
);

window.location=
"login.html";

}