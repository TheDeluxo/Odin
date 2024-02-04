// console.log(68 + 1)
// let seq = [1, 22, 23, 24, 25, 26]
// console.log(seq)
// console.log((4 + 6 +9) / 77)
// let a = 10;
// console.log(a)
// console.log(a * 9)
// let b = 7 * a;
// console.log(b)
// const MAX = 57
// var actual = MAX - 13
// var percentage = actual/MAX
// console.log(percentage)

let kuro = 12
let sap = 12

function render(arg1 = "6", arg2 = "9") {
    console.log(arg1 + arg2)
}

render(kuro,sap)
render()


// When a user inputs a number
// Loop from 1 to the entered number
// If the current number is divisible by 3 then print "Fizz"
// If the current number is divisible by 5 then print "Buzz"
// If the current number is divisible by 3 and 5 then print "FizzBuzz"
// Otherwise print the current number

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    }else if(i % 5 === 0){
        console.log("Bizz")
    }else if(i % 3 === 0){
        console.log("Fizz")
    } else{
        console.log(i)
    }
}
alert("Дъра-табърата")