let firstPrev = 1;
let secondPrev = 0;

const fibonacci = function(num) {
    for (let i = 2; i <= num; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;
};

console.log(fibonacci(10))