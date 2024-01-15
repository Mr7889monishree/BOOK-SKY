var popupOverlay=document.getElementById("popup");
var popupBox=document.getElementById("popBox");
var button=document.getElementById("plus");
var close=document.getElementById("close");
var container=document.querySelector(".container");
var add=document.getElementById("add");

button.addEventListener("click",(event)=>{
    popupOverlay.style.display="block"; 
    popupBox.style.display="block";
})
close.addEventListener("click",(event)=>{
    popupOverlay.style.display="none"; 
    popupBox.style.display="none";
})
var booktitleinput=document.getElementById("book-title-input");
var bookAuthor=document.getElementById("book-Author-input");
var bookDescription=document.getElementById("book-desc-input");
var bookContainer=document.getElementById("book-container");
add.addEventListener("click",(event)=>{
    event.preventDefault();
    var div=document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookAuthor.value}</h5><p>${bookDescription.value}</p>
    <button id="delete" type='button' onclick="Delete(event)">Delete</button>`;
    popupOverlay.style.display="none";
    popupBox.style.display="none";
    container.append(div);
})

function Delete(event){
    event.target.parentElement.remove();
}



