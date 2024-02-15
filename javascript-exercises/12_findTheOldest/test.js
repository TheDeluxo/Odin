const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  const people2 = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
]

const findTheOldest = function(people) {
    let newPeople = {}
    let arr = []
    let arr_n = []
    let today = new Date()
    for (var i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath == undefined){
            age = today.getFullYear() - people[i].yearOfBirth;
        } else {
            age = people[i].yearOfDeath - people[i].yearOfBirth
        }
        // arr.push(people[i].name + " is " + age + " years old");
        // newPeople["name"] = people[i].name;
        // newPeople["age"] = age;
        newPeople[people[i].name] = age;
    }
    // return newPeople
    for (const property in newPeople) {
        // console.log(property)
        // console.log(newPeople[property])
        arr_n.push(property)
        arr.push(newPeople[property])
        
        // console.log(`${property}: ${newPeople[property]}`);
    }
    
    console.log(arr_n)
    console.log(arr)
    // return arr
};

// console.log(findTheOldest(people2));
findTheOldest(people2);