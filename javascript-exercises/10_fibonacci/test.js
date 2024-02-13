const fibonacci = function(num) {
    let n = 1
    for (i = num; i = 1; i--){
        // answer = 1 1 2 3
        // answer = 1 + 0, 1 + 1, 1 + 2, 2 + 3, 3 + 5
        // F(n) = F(n-1) + F(n-2)
        n = (i - 2) - (i - 1)
    }
    return n
};

console.log(fibonacci(25))