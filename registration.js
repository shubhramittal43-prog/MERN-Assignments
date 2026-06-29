const form = document.getElementById("registerForm");

const message = document.getElementById("message");

const toggle = document.getElementById("toggle");

const password = document.getElementById("password");

toggle.addEventListener("click",function(){

if(password.type==="password"){

password.type="text";

toggle.innerHTML="🙈";

}

else{

password.type="password";

toggle.innerHTML="👁";

}

});

form.addEventListener("submit",function(e){

e.preventDefault();

let fname=document.getElementById("fname").value.trim();

let lname=document.getElementById("lname").value.trim();

let email=document.getElementById("email").value.trim();

let pass=password.value.trim();

let dob=document.getElementById("dob").value;

let gender=document.querySelector('input[name="gender"]:checked');

if(fname===""){

showError("Enter First Name");

return;

}

if(lname===""){

showError("Enter Surname");

return;

}

if(email===""){

showError("Enter Email");

return;

}

if(!email.includes("@")){

showError("Invalid Email");

return;

}

if(pass.length<6){

showError("Password must be at least 6 characters");

return;

}

if(dob===""){

showError("Select Date of Birth");

return;

}

if(gender==null){

showError("Select Gender");

return;

}

showSuccess();

});

function showError(text){

message.className="error";

message.innerHTML=text;

}
function showSuccess(){

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;

    // Save name
    localStorage.setItem("username", fname + " " + lname);

    message.className = "success";
    message.innerHTML = "🎉 Account Created Successfully! Redirecting...";

    setTimeout(function(){

        window.location.href = "fb.html";

    },1500);

}
   