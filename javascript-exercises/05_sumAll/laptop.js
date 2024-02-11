const sumAll = function(num1, num2) {
    if(!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR!";
    if(num1 < 0 || num2 < 0) return "ERROR!";

    ans = 0
    if (num1 < num2) {
        for (var i = num1; i <= num2; i++) {
            ans += i;
            // console.log("ans: " + ans)
        }
    }else if (num1 > num2) {
        for (var i = num2; i <= num1; i++) {
            ans += i;
            // console.log("ans: " + ans)
        }
    }
    return ans
};

console.log(sumAll(10,4));