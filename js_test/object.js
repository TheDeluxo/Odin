/*
let test = document.getElementById("test");

let test2 = {
    name: "KuraMi",
    name2: "Yanko",
    age: 20
}

// test.textContent = "test"

test.textContent = test2.name + " " + test2.name2

test2.name3 = "Бръснаря"


let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}
*/
// Exercises:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.
user = {}
user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name

// Check for emptiness
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

let schedule = {};

schedule["8:30"] = "get up";

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

isEmpty(schedule)

// Sum object properties
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example.
//If salaries is empty, then the result must be 0.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);

// Multiply numeric property values by 2
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(menu){
    for (let key in menu){
        if (typeof menu[key] === "number"){
            menu[key] *= 2;
        }
    }
}

multiplyNumeric(menu)
console.log(menu.width);
console.log(menu.height);