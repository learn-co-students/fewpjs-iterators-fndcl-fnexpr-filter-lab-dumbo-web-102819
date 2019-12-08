// Code your solution here

function findMatching(arr, name) {
    return arr.filter(function(driver){
        return (driver.toLowerCase() == name.toLowerCase())
    })
}

function fuzzyMatch(arr, name){
    let nl = name.length;
    return arr.filter(function(driver) {
        return driver.slice(0, nl) == name;
    })
}

function matchName(arr, name) {
    return arr.filter(function(driver){
        return driver.name == name;
    })
}