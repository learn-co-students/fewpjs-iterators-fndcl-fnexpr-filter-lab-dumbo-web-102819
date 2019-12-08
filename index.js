// Code your solution here

function findMatching(drivers, name) {
   let results = drivers.filter(blah => blah.toLowerCase() === name.toLowerCase());
    return results;
}

function fuzzyMatch(drivers, name) {
    let results = drivers.filter(blah => blah[0] == name[0]);
    return results;
}

function matchName(drivers, name) {
    let results = drivers.filter(blah => blah.name.toLowerCase() === name.toLowerCase());
     return results;
 }