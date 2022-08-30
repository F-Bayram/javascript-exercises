const findTheOldest = function(arr) {
    const d = new Date();
    const CURRENT_YEAR = d.getFullYear();
    const INITIAL_PERSON = {
        name : "dummy",
        yearOfBirth : CURRENT_YEAR
    };

    let oldest = Object.values(arr).reduce(
        (previousPerson, nextPerson) => {
            var a;
            var b;
            if(previousPerson.yearOfDeath !== undefined)
                a = previousPerson.yearOfDeath - previousPerson.yearOfBirth;
            else{
                a = CURRENT_YEAR - previousPerson.yearOfBirth;
            }
            if(nextPerson.yearOfDeath !== undefined)
                b = nextPerson.yearOfDeath - nextPerson.yearOfBirth;
            else{
                b = CURRENT_YEAR - nextPerson.yearOfBirth;
            }
            return a > b ? previousPerson : nextPerson;
        }, INITIAL_PERSON
    );

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
