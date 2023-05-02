
//import the lodash module
const lodash = require('lodash');

//Create a function to find a maximum value from number array.
const findMaxValue = arr => lodash.max(arr);

//Create a function to return all values from numbers array 
//which are greater than the second parameter.​
const filterValues = (arr, par) => lodash.filter(arr, num => num > par);

//Create a function to return all values of employeeName array in capital letters.
const nameInCapital = arr => arr.map(employee => employee.toUpperCase());


module.exports = {
  findMaxValue,
  filterValues,
  nameInCapital,
  
}
