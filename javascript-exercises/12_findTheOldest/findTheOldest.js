const findTheOldest = function(people) {
    for (var i = 0; i < people.length; i++) {
        age = people[i].yearOfDeath - people[i].yearOfBirth
        arr.push(people[i].name + " is " + age + " years old");
    }
};

// Do not edit below this line
module.exports = findTheOldest;
