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
!email
||
!password
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

/* OPEN DASHBOARD */

window.location =
"./pages/user.html";

}

/* REGISTER */

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
"username",
first
);

alert(
"Account created successfully"
);

window.location=
"./login.html";

}

/* FORGOT PASSWORD */

function resetPassword(){

let email=
document.getElementById(
"resetEmail"
)?.value;

if(
!email
){

alert(
"Enter Email"
);

return;

}

alert(
"Reset Link Sent"
);

window.location=
"./login.html";

}

/* DASHBOARD */

let dash=

document.getElementById(
"dashboardUser"
);

if(
dash
){

dash.innerText=

localStorage.getItem(
"username"
)

||

"User";

}

/* TOP BUTTON */

function goTop(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
function showPage(page){

document.getElementById(
"dashboardContent"
).style.display="none";

document.getElementById(
"profileContent"
).style.display="none";

document.getElementById(
"projectsContent"
).style.display="none";

if(page==="dashboard"){

document.getElementById(
"dashboardContent"
).style.display="block";

}

if(page==="profile"){

document.getElementById(
"profileContent"
).style.display="block";

}

if(page==="projects"){

document.getElementById(
"projectsContent"
).style.display="block";

}

}
function showPage(page){

const sections=[

"dashboard",

"profile",

"projects",

"messages",

"saved",

"settings"

];

sections.forEach(function(id){

const section=
document.getElementById(id);

if(section){

section.style.display=
"none";

}

});

const selected=

document.getElementById(page);

if(selected){

selected.style.display=
"block";

}

}
