const repeatString = function(str,num) {
    if(num < 0){
        return "ERROR"
    }
    answ = "";
    for(i = 0; i < num; i++){
        answ += str
    }
    return answ
};

// Do not edit below this line
module.exports = repeatString;
