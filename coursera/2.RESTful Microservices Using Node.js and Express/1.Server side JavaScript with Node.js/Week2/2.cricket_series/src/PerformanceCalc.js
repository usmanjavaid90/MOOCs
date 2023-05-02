
const PerformanceCalculator=(runs,balls)=>{
      // Write the Logic here

      let average = 0;
      average = runs / balls;

      if (runs > 100 && balls < 50) {
            average = 1.2 * average;
      }
      else if (runs > 50 && balls < 20) {
            average = 1.1 * average;
      }
      else if (runs > 30 && balls < 15) {
            average = 1.01 * average;
      }

      return average;
}

module.exports={PerformanceCalculator}
