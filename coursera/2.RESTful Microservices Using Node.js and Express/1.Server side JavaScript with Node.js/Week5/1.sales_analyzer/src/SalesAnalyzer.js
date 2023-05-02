
//import all the require module
const fs = require('fs');
const parse = require('csv-parser');
const lodash = require('lodash');

//Write try and catch and handle the exceptions where ever require
//return the callback with appropriate values in the methods 

//More userdefined methods can be written if required to write the logical stuff

////This method will read the file content the first parameter is filename and 
//second is a callback
 //create array name it as  fileContents
const readFileContents = (fileName, cb) => {
  let fileContents = [];

   //push row by row data in the array created

  fs.createReadStream(fileName)
  .pipe(parse())
  .on('data', (data) => fileContents.push(data))
  .on('end', ()=> cb(null, fileContents))
}

// Use Lodash to filter the data this method will take first parameter
//as fileContents and second parameter as a callback
const filterData = (fileContents, cb) => {
  let filteredData = lodash.filter(fileContents, data => data.payment_method == 'credit') ;  
  cb(null, filteredData);
}

//This method will writeFile data to output.txt file
//it is taking parameters are filteredData and a callback
//filteredata will be given by the filterData method
const writeFilteredDataToFile = (filteredData, cb) => {
  try {
    //use writeFile method and write the filteredData in output.txt file
    const writeStream = fs.createWriteStream('output.txt');
    writeStream.write(filteredData);
    cb(null, 'Successfully wrote filtered data to output.txt file..!')  
  } catch (err) {}
    
}


module.exports = {
  readFileContents,
  filterData,
  writeFilteredDataToFile
}
