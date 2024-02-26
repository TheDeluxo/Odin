let container = document.getElementById('container');
let set = document.getElementById('set');
let reset = document.getElementById('reset');
boardSet()

set.addEventListener('click', newReset)
reset.addEventListener('click', boardReset);

function newReset(){
    location.reload()
}

function boardReset(){
    // location.reload()
    let  divs = document.querySelectorAll(".cell");
    divs.forEach((div) => {
        div.style.backgroundColor = "White";
    });
    // div.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",15)";
    // div.style.backgroundColor = "rgb(0,0,0)";
}

function boardSet(){
    let size = prompt("Set board size: ")
    // return size
    for (let i = 0; i < size; i++) {
        let newDiv = document.createElement("div")
        newDiv.id = "divCol" + i;
        newDiv.className = "mainCell"
        container.appendChild(newDiv);
    }
    for (let i = 0; i < size; i++) {
        for (let i = 0; i < size; i++) {
            let div = document.getElementById("divCol" + i);
            let newDiv = document.createElement("div")
            newDiv.id = "divRow" + i;
            newDiv.className = "cell"
            // newDiv.style.width = (size * (size / 4)) + "px";
            // newDiv.style.height = (size * (size / 4)) + "px";
            newDiv.style.width = "60px";
            newDiv.style.height = "60px";
            // newDiv.style.width = size / 2 + "px";
            // newDiv.style.height = size / 2 + "px";
            container.style.width = (size * size) / 2 + "px";
            container.style.height = (size * size) / 2 + "px";
            div.insertBefore(newDiv, null);
        }
    }
}

let  divs = document.querySelectorAll(".cell");

divs.forEach((div) => {
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = "black";
        // console.log(div);
      });
    });