const findTheOldest = function (people) {
    return people
        .map(person => {
            person.age = (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;
            return person;
        })
        .reduce((oldest, person) => {
            return oldest.age > person.age ? oldest : person;
        });
};

// Do not edit below this line
module.exports = findTheOldest;
