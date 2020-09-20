var button = document.getElementsByClassName("enter")[0];
var input = document.getElementsByClassName("userinput")[0];
var ul = document.getElementById("allItems");
var li = document.getElementsByTagName("li")[0];
var listLength = ul.childElementCount;
var active = li;

document.getElementById("allItems").addEventListener("click",function(e){
    if (e.target && e.target.matches("li.item") && e.target.matches("li.active")) {
        e.target.className+=' animate__backOutRight'
        active.classList.remove("active")
        setTimeout(() => {ul.removeChild(e.target);},750);
    } else if (e.target && e.target.matches("li.item")) { 
    active.classList.remove("active","animate__animated", "animate__pulse")
    e.target.classList.remove("animate__backInLeft")
    e.target.className+=' active animate__animated animate__pulse animate__infinite'
    active = document.getElementsByClassName("active")[0];

    }
});

function inputLength(){
    return input.value.length;
}

function addListItem(){
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li)
        li.className ='item list-group-item animate__animated animate__backInLeft';
        input.value ="";
        listLength = ul.childElementCount;
        
}

function addOnClick(){
    if (inputLength()>0){
        addListItem();
    }
}

function addOnEnter(event){
    if (inputLength()>0 && event.keyCode===13){
        addListItem();
    }
}

button.addEventListener("click", addOnClick);


input.addEventListener("keypress", addOnEnter);