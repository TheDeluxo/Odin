function reverseString(str) {
    rts = "";
    u = 1;
    for(i = 0; i < str.length; i++){
        rts += str[str.length-(u)]
        u++;
    }
    return rts
};

// Do not edit below this line
module.exports = reverseString;

console.log(reverseString("Hello, World!"));