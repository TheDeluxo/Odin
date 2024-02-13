const removeFromArray = function(arr,...args) {
    let n = [];
    arr.forEach(element => {
        if (!args.includes(element)) {
            n.push(element);
       }
    });
    return n
};

// Do not edit below this line
module.exports = removeFromArray;
