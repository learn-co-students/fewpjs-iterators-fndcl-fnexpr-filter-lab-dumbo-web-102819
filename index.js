// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(arr, str) {
    return arr.filter((e, i, s) => {
        return e.toLowerCase() === str.toLowerCase();
    });
}

function fuzzyMatch(arr, str) {
    return arr.filter((e, i, s) => {
        return e.slice(0, str.length) === str
    });
}

function matchName(arr, str) {
    return arr.filter((e, i, s) => {
        return e.name.toLowerCase() === str.toLowerCase();
    });
}

// findMatching(drivers, "Bobby");
// findMatching(drivers, "Sammy");
// findMatching(drivers, "Susan");

// fuzzyMatch(drivers, "Sa");

matchName(drivers, "Bobby");