const reverseString = function(str) {
    rts = ""
    for(i = 0; i < str.length; i++){
        // rts += ttt[ttt.length -1]
        rts += substr(str[str.length-1],0+i)
        // t = str.replace(str[str.length], "")
    }
    return rts
};

// Do not edit below this line
module.exports = reverseString;
