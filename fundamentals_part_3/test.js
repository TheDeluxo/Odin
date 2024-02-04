let str = "iofdjseiohftg"
console.log(str[0])

console.log(str.slice(1))

function capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
}
console.log(capitalize(str))

console.log(str.slice(-1))