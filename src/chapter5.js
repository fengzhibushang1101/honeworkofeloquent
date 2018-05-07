const ancestry = JSON.parse(require("./chapter5_data"));

//2.

function average(array) {
    function plus(a, b) {
        return a + b;
    }

    return array.reduce(plus) / array.length;
}

let byName = {};
ancestry.forEach(function (person) {
    byName[person.name] = person;
});

console.log(average(ancestry.map(person => {
    return byName[person.mother] ? person.born - byName[person.mother].born : 0
}).filter(i => i)));


//3.
function groupBy(array, groupOf) {
    let groups = {};
    array.forEach(function (element) {
        let groupName = groupOf(element);
        if (groupName in groups)
            groups[groupName].push(element);
        else
            groups[groupName] = [element];
    });
    return groups;
}

let byCentury = groupBy(ancestry, function (person) {
    return Math.ceil(person.died / 100);
});

for (let century in byCentury) {
    let ages = byCentury[century].map(function (person) {
        return person.died - person.born;
    });
    console.log(century + ": " + average(ages));
}


function every(arr, func) {
    for (let a of arr) {
        if (!func(a)) return false;
    }
    return true;
}

function some(arr, func) {
    for (let a of arr) {
        if (func(a)) return true;
    }
    return false;
}
//4.