const multiply = function(num) {
    let n = 1;
    for (i=num; i > 0; i--){
        n *= i
    }
    return n
};

console.log(multiply(5))