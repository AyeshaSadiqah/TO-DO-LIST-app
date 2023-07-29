
document.addEventListener('DOMContentLoaded', function () {


const myButton = document.getElementById('addbutton'); 
const box = document.getElementById('inputbox'); 
const todo = document.getElementById('list'); 

myButton.addEventListener('click', function () {
    
    if (box.value === '') {   
         alert("must write something");
    } else {
        var line = document.createElement('li');
        line.innerText = box.value;
        todo.appendChild(line);
        box.value = "";
        
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        line.appendChild(span);
        saveData();
    }
    
}); 
   

todo.addEventListener("click",function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false);

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}
function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask();

});



