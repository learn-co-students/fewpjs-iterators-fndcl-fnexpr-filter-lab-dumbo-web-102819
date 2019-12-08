


  function findMatching(drivers, asdf) { 
      let blarg = drivers.filter(driver => driver.toUpperCase() === asdf.toUpperCase());
      return blarg;
  }

  function fuzzyMatch(drivers, string) {
      let blah = drivers.filter(driver => 
        driver[0] === string[0]
      )
      return blah
  }

  function matchName(drivers, string) {
      let blurg = drivers.filter(driver => driver.name.toUpperCase() === string.toUpperCase())
      return blurg
  }