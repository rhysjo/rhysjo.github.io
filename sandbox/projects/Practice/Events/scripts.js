/* 
    Yes these functions should be split into their own script files.
    No I couldn't be bothered to create them.

*/

/* Panel counter code below */

const btn = document.getElementById('btn');
const nice = document.getElementById('nice');
const out = document.getElementById('out');

let counter = 0;

function count(){
    counter += 1;
    if(counter === 69){
        nice.innerHTML = "NICE";
    }else{
        nice.innerHTML = "";
    }

    out.innerHTML = counter;
}

btn.addEventListener('click',count)


/* Panel colour changer code below */

const colours = {
    1: "red",
    2: "blue",
    3: "green",
    4: "orange",
    5: "yellow",
    6: "purple",
    7: "aqua",
    8: "lime",
    9: "pink",
    10: "brown"
}

const btn2 = document.getElementById('btn2');
const col1 = document.getElementById('second');
const out2 = document.getElementById('out2');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function backgroundColour(){
    let colour = colours[getRandomInt(1,10)]
    col1.style.backgroundColor = colour
    out2.innerHTML = colour.toUpperCase()
}

btn2.addEventListener('click', backgroundColour);

/* Drop down colour selector code below */

const colourSelect = document.getElementById('colour-select');

colourSelect.addEventListener('change', function (event){
    const selectedColour = event.target.value;
    col1.style.backgroundColor = selectedColour;
    out2.innerHTML = selectedColour.toUpperCase();
});

/* Form submission button code below */

const formSubmit = document.querySelector('#form-submit');
const formOut = document.querySelector('#form-out');

const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');

const cardNum = document.querySelector('#card-number');
const expiryDate = document.querySelector('#expiry-date');
const secCode = document.querySelector('#sec-code');

formSubmit.addEventListener('click',function(){
    const fullName = firstName.value + " " + lastName.value;
    let output = "";

    if(cardNum.value.trim() === ""){
        output += "Please enter a valid card number.<br>"
    }

    if(expiryDate.value.trim() === ""){
        output += "Please enter a valid expiry date.<br>"
    }

    if(secCode.value.trim() === ""){
        output += "Please enter a valid security code."
    }

    if(cardNum.value.trim() !== "" && expiryDate.value.trim() !== "" && secCode.value.trim() !== ""){
        output = `Thank you ${fullName} you have saved your grandma and transferred £5000 to me :D`
    }

    formOut.innerHTML = output;
});

/* To Do List code below */

const ordList = document.querySelector('#todo-list');

/* ADD ITEM */

const newBtn = document.querySelector('#new-btn');

newBtn.addEventListener('click', function(){
    const task = prompt("Enter your task below: ");

    if(task.trim() === ""){
        return
    }

    const newItem = createElement("li");
    newItem.innerHTML = task;
    ordList.appendChild(newItem);
});

function createElement(elementType){
    const newElement = document.createElement(elementType);
    return newElement;
}

/* REMOVE ITEM */

const rmvBtn = document.querySelector('#rmv-btn');

rmvBtn.addEventListener('click', function(){
    const items = document.querySelectorAll('li');
    const rmvItem = prompt("Which item number do you want to remove: ");
    ordList.removeChild(items[rmvItem - 1]);

})

/* EDIT ITEM */

const editBtn = document.querySelector('#edit-btn');

editBtn.addEventListener('click', function(){
    const items = document.querySelectorAll('li');
    const editItem = prompt("Which item number do you want to edit: ");
    const newText = prompt("Enter your change: ");

    items[editItem - 1].textContent = newText;
});

/* Calculator Code below */

const buttonIds = [
    'add-btn', 'sub-btn', 'mult-btn', 'div-btn', 
    'one-btn', 'two-btn', 'three-btn', 'four-btn', 
    'five-btn', 'six-btn', 'seven-btn', 'eight-btn', 
    'nine-btn', 'zero-btn', 'eql-btn', 'del-btn', 'clr-btn'
  ];
  
const buttons = {};

buttonIds.forEach(id => {
buttons[id.replace('-btn', '')] = document.querySelector(`#${id}`);
});

const inout = document.querySelector('.inout');
let expression = "";
let result = 0;

buttons.add.addEventListener('click', function(){
    expression += " + ";
    inout.textContent += "+";
});

buttons.sub.addEventListener('click', function(){
    expression += " - ";
    inout.textContent += "-";
});

buttons.mult.addEventListener('click', function(){
    expression += " * ";
    inout.textContent += "*";
});

buttons.div.addEventListener('click', function(){
    expression += " / ";
    inout.textContent += "/";
});

buttons.one.addEventListener('click', function(){
    expression += "1"
    inout.textContent += "1";
});

buttons.two.addEventListener('click', function(){
    expression += "2"
    inout.textContent += "2";
});

buttons.three.addEventListener('click', function(){
    expression += "3"
    inout.textContent += "3";
});

buttons.four.addEventListener('click', function(){
    expression += "4"
    inout.textContent += "4";
});

buttons.five.addEventListener('click', function(){
    expression += "5"
    inout.textContent += "5";
});

buttons.six.addEventListener('click', function(){
    expression += "6"
    inout.textContent += "6";
});

buttons.seven.addEventListener('click', function(){
    expression += "7"
    inout.textContent += "7";
});

buttons.eight.addEventListener('click', function(){
    expression += "8"
    inout.textContent += "8";
});

buttons.nine.addEventListener('click', function(){
    expression += "9"
    inout.textContent += "9";
});

buttons.zero.addEventListener('click', function(){
    expression += "0"
    inout.textContent += "0";
});

buttons.eql.addEventListener('click', function(){
    result = eval(expression);
    inout.textContent = result;
});

buttons.del.addEventListener('click', function(){
    inout.textContent = inout.textContent.slice(0,-1);
});

buttons.clr.addEventListener('click', function(){
    expression = "";
    inout.textContent = "";
});






