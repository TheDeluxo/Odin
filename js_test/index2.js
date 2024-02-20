// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";

container.appendChild(para);

const head3 = document.createElement("h3");
head3.textContent = "I'm blue h3!";
head3.style.color = "blue";

container.appendChild(head3);

const div = document.createElement("div");

const headDiv = document.createElement("h1");
headDiv.textContent = "I'm in a div!";

const paraDiv = document.createElement("p");
paraDiv.textContent = "ME TOO!";
div.appendChild(headDiv);
div.appendChild(paraDiv);

div.style.border = "6px solid black";
div.style.backgroundColor = "pink";
div.style.textAlign = "center";

container.appendChild(div);

btn.addEventListener('click', function (e) {
    console.log(e);
});

btn.addEventListener('click', function (e) {
    console.log(e.target);
});

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
button.addEventListener('click', () => {
    alert(button.id);
  });
});

console.log(para)
console.log(head3)
console.log(div)
console.log(headDiv)
console.log(paraDiv)