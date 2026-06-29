const name=localStorage.getItem("username");

document.getElementById("welcome").innerHTML="Hi, "+name;

const btn=document.getElementById("postBtn");

const postArea=document.getElementById("posts");

btn.onclick=function(){

const text=document.getElementById("postText").value;

if(text==""){

alert("Write something");

return;

}

const div=document.createElement("div");

div.className="post";

div.innerHTML=`

<h3>${name}</h3>

<p>${text}</p>

<p class="like">❤️ Like</p>

<button class="delete">Delete</button>

`;

postArea.prepend(div);

document.getElementById("postText").value="";

div.querySelector(".delete").onclick=function(){

div.remove();

}

div.querySelector(".like").onclick=function(){

this.innerHTML="❤️ Liked";

}

}

document.getElementById("theme").onclick=function(){

document.body.classList.toggle("dark");

}