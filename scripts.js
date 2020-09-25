const button = document.getElementsByClassName("enter")[0];
let input = document.getElementsByClassName("userinput")[0];
const ul = document.getElementById("allItems");
let li = document.getElementsByTagName("li")[0];
console.log(bg);
let listLength = ul.childElementCount;
let active = li;
let removing;

console.log(button);
console.log(input);
console.log(ul);
console.log(li);
console.log(listLength);
console.log(active);

document.getElementById("allItems").addEventListener("click", function (e) {
    if (e.target && e.target == active && e.target != removing) {
        console.log('success!');
        e.target.className += ' animate__backOutRight removing';
        removing = document.getElementsByClassName("removing")[0];
        active.classList.remove("active");
        setTimeout(() => {
            active.classList.remove("removing")
            ul.removeChild(e.target);
        }, 750);

    } else if (e.target.matches("li.item") && e.target != removing) {
        console.log('success on activating!');
        active.classList.remove("active", "animate__animated", "animate__pulse");
        e.target.classList.remove("animate__backInLeft");
        e.target.className += ' active animate__animated animate__pulse animate__infinite';
        active = document.getElementsByClassName("active")[0];
    }
});

let inputLength = () => input.value.length;

const addListItem = () => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.className = 'item list-group-item animate__animated animate__backInLeft';
    input.value = "";
    listLength = ul.childElementCount;
};

const addOnClick = () => {
    if (inputLength() > 0) {
        addListItem();
    }
};

const addOnEnter = (event) => {
    if (inputLength() > 0 && event.keyCode === 13) {
        addListItem();
    }
};

button.addEventListener("click", addOnClick);
input.addEventListener("keypress", addOnEnter);