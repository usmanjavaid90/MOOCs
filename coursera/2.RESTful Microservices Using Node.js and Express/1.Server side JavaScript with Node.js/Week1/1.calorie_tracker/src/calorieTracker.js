const calculateWeightLostInAMonth = (cycling,running,swimming,extraCalorieInTake) =>{
   let weightLostInAMonth = 0;

   // write logic here
   if (cycling <= 0 || running <= 0 || swimming <= 0 || extraCalorieInTake <= 0) {
      return -1;
   }

   weightLostInAMonth = (8 * (cycling + running +swimming) - 30 * extraCalorieInTake) / 1000;
   
   return weightLostInAMonth;
}

module.exports = calculateWeightLostInAMonth

