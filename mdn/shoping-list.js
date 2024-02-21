const list = document.querySelector('ul');
      const input = document.querySelector('input');
      const button = document.querySelector('button');

      button.addEventListener('click', () => {
        const myItem = input.value;
        input.value = '';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = 'Delete';
        list.appendChild(listItem);

        listBtn.addEventListener('click', () => {
          list.removeChild(listItem);
        });

        input.focus();
      });

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



// how I started it:

// let ul = document.querySelector("ul");
// let input = document.querySelector("input");
// let addButton = document.querySelector("#addButton");
// let delButton = document.querySelector(".delButton");

// addButton.addEventListener("click", () =>  {
//     let boxItem = document.querySelector("#item");
//     console.log(boxItem.value + " should be added")
//     ul.innerHTML += "<li id=" + boxItem.value + ">" + boxItem.value + "<button class='button' id='delButton'>Delete</button>" + "</li>"
//     boxItem.value = "";
//     boxItem.focus();
// });


// delButton.addEventListener("click", () =>  {
//     let li = document.createElement("#");
// });