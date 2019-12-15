function findMatching (drivers, string) {

    return drivers.filter( driver =>
      driver.toLowerCase() === string.toLowerCase() )}

//   return drivers.filter((driver) => {
//     driver.toUpperCase() === string.toUpperCase()
//   })
// }

  // // let list = drivers.map((a) => a.toUpperCase());
  // let str = string.toUpperCase;
  // let final = [];
  // for (let item of ele) {
  //   final.push(string[list.indexOf(ele)]
  // }
  // return final;

function fuzzyMatch(drivers, string){
  return drivers.filter(driver => driver.slice(0, string.length) === string)
}

function matchName (drivers, string) {
  return drivers.filter((driver) => driver.name === string)
}
