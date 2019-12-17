const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, string){
   return array.filter(e => 
      e.toLowerCase() === string.toLowerCase()
  )
  
}

findMatching(drivers, 'Bobby')


function fuzzyMatch(array, string){
    return array.filter(e => 
        e.toLowerCase().indexOf(string.toLowerCase()) === 0)
}

function matchName(array, string) {
     return array.filter( e =>
         e.name === string
     )
}
