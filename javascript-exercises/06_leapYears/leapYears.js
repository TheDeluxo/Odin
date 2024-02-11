const leapYears = function(year) {
    if (year > 0 && year % 4 === 0 && year % 400 === 0) {
        return year + " is leap year."
    }else{
        return year + " is not leap year."
    }
};

// Do not edit below this line
module.exports = leapYears;
