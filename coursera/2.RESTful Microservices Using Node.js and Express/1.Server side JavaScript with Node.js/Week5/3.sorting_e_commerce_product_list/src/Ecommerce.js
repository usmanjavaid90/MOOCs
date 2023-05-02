//import all the require modules
const fs = require('fs');
const parse = require('csv-parser');
const lodash = require('lodash');

//write try catch to hanlde the exceptions

//More userdefined methods can be written if required to write the logical stuff

//return the callback with appropriate data where ever require in all the methods

//This method will read the file it takes two parameters first the fileName 
//and second the callback
const readFileContents = (fileName, cb) => {
  
  let fileContents = [];
  
  fs.createReadStream(fileName)
    .on('error', (err)=> cb("Encountered error while reading file contents..!", err))
    .pipe(parse())
    .on('data', (data) => fileContents.push(data))
    .on('end', ()=> cb(null, fileContents))
}

//This method will sortDataonprice it will take two parameters one is fileContent
//second the callback
const sortDataOnPrice = (fileContents, cb) => {
  //use lodash.sortBy()
  let sortedData = lodash.sortBy(fileContents, o => parseFloat(o.retail_price))
  cb(null, sortedData);
}

//This method will sortDataonRating 
const sortDataOnRating = (fileContents, cb) => {
  //use map where ever required
  //use lodash sortBy() and compact() if required
  let sortedData = fileContents.filter(data => data.product_rating !== 'No rating available');
  sortedData = lodash.sortBy(sortedData, o => parseFloat(o.product_rating))
  
  //use lodash.reverse() if required
  cb(null, lodash.reverse(sortedData));
}

//This method will write the sortedData in the output file
const writeSortedDataToFile = (outputFileName, sortedData, cb) => {
  const writeStream = fs.createWriteStream(outputFileName)
  writeStream.write(sortedData);

  cb(null, "Successfully written"); 
 
}

module.exports = {
    readFileContents,
    sortDataOnPrice,
    sortDataOnRating,
  
}