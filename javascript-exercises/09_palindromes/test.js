const reversed = function (str) {
    rts = "";
    u = 1;
    for(i = 0; i < str.length; i++){
        rts += str[str.length-(u)]
        u++;
    }
    return rts
}

const regexForge = function (str) {
    str = str.replace(/[^a-zA-Z]/g, '');
    return str
}

const palindromes = function (str) {
    let rev = reversed(str)
    let spaced = regexForge(rev.toLowerCase())
    let spacedStr = regexForge(str.toLowerCase())
    console.log(spaced)
    console.log(spacedStr)
    if (spaced === spacedStr) {
        return true
    } else{
        return false
    }
};

console.log(palindromes("racecar"))
