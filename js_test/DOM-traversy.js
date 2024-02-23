console.dir(document)
console.dir(document.URL)
console.log(document.domain)
console.log(document.URL)
console.log(document.title)
console.log(document.doctype)
console.log(document.head)
console.log(document.body)
console.log(document.all)
console.log(document.all[10])
console.log(document.forms)
console.log(document.links)
console.log(document.images)

// let btn = document.getElementById("button").addEventListener
// ('click', function(){
//     console.log("clicked is the button");
// });


let btn = document.getElementById("button").addEventListener
('click', clickie)

function clickie(){
  console.log("clicked is the button");
}

let loggerBox = document.getElementById("loggerBox")
let para = document.getElementById("para")

let logger = document.getElementById("logger").addEventListener
('click', loggerTheFunc)

function loggerTheFunc(){
  loggerBox.value = "You've been logged!";
  loggerBox.style.backgroundColor = "yellow";
  para.textContent = "You are logged here as well"
  para.style.backgroundColor = "pink";
  console.log("You've been logged!");
}

let btnn = document.getElementById("button2").addEventListener
('click', clicked);

let button3 = document.getElementById('button3'); 
let box = document.getElementById('box');         

button3.addEventListener('click', runEvent);      
button3.addEventListener('dblclick', runEvent);   
button3.addEventListener('mousedown', runEvent);  
button3.addEventListener('mouseup', runEvent);    

// box.addEventListener('mouseenter', runEvent);     
// box.addEventListener('mouseleave', runEvent);     
// box.addEventListener('mouseover', runEvent);      
// box.addEventListener('mouseout', runEvent);       
box.addEventListener('mousemove', runEvent);      

let itemInput = document.getElementById("fname");  // grab ahold of the text box of the form (in this example)
let form = document.querySelector("form");
let select = document.querySelector("select");

// itemInput.addEventListener("keydown", runEvent2);   // triggered when a key is pressed down
// itemInput.addEventListener("keyup", runEvent2);     // triggered when a key is released
// itemInput.addEventListener("keypress", runEvent2);  // triggered when a key is pressed, doesn't matter if released
// itemInput.addEventListener("focus", runEvent2);  // triggered when element is focused on, clicked in the text box for example
// itemInput.addEventListener("blur", runEvent2);   // triggered when element is being focused but looses focus, clicked out the text box
// itemInput.addEventListener("cut", runEvent2);    // self explanatory
// itemInput.addEventListener("paste", runEvent2);  // self explanatory
// itemInput.addEventListener("input", runEvent2);  // whatever you do with the element (type, cut, paste...)
select.addEventListener("change", runEvent2); 
form.addEventListener("submit", runEvent2);

function runEvent2(e) {
    e.preventDefault();  // prevent the default HTML submit form function
    // console.log("event");
    console.log(e.target.value);  //outputs the keystrokes to the console in real time
    // document.getElementById("output").innerHTML = "<h3>" + e.target.value + "</h3>"  // same thing but in <h3> tag
    console.log("Type of event: " + e.type)
}

function clicked(e){
    console.log("You've clicked");
}

function runEvent(e) {
    output.innerHTML = "<h3>MouseX: "+ e.offsetX + "</h3><h3>MouseY: " + e.offsetY + "</h3>"
    box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",135)";
}