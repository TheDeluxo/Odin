let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

function addItem(event) {
    event.preventDefault();
    console.log(1);
}