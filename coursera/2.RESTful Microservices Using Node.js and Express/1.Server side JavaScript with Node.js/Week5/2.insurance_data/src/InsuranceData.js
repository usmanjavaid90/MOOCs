//import all the modules require
const fs = require('fs');
const readline = require('readline');
const lodash = require('lodash');
const parse = require('csv-parser');

//Use try and catch to handle the error where ever required
//return the callback with appropriate data where ever require in all the methods

//More userdefined methods can be written if required to write the logical stuff

//This method will take two parameters first the fileName
//and second a callback 
//read file data line by line using readLine
//create array and push all data inside the array


const readFileContentsLineByLine = (fileName, cb) => {
  
  let fileContents = [];

  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
    output: process.stdout,
    terminal: false
  });

  rl.on('line', (line) => fileContents.push(line));  
  rl.on('close', ()=> cb(null, fileContents));
}

//This method will take two parameters first the filecontent
//and second the callback 
//use map to filter the data 
//Filter all the records for female candidates given region as southwest.

const filterFemaleCandidates = (fileContents, cb) => {
  
  let filteredData  = fileContents.map(person => {
    let personData = person.split(', ');
    if (personData[1] == 'female' && personData[5] == 'southwest') {
      return person;
    }
    else {
      return false;
    }
  });

  //use lodash.compact() method if required
  filteredData = lodash.compact(filteredData); 

  return cb(null,filteredData);
}

//This method will write filtered data in the output file
const writeFilteredDataToFile = (outputFileName, filteredData, cb) => {
 
    //use writeFile method to write the filteredData
    const writeStream = fs.createWriteStream(outputFileName);
    writeStream.write(filteredData);
    cb(null, 'Written Successfully')
      
}


//This method will read the file content using Streams
//create array and push all the data from file to it


const readFileContentsUsingStream = (fileName, cb) => {
  let fileContents = [];

  fs.createReadStream(fileName)
    .on("error", (err) => {
      console.log("Error while reading contents of file using streams, ERROR::", err);
      cb("Encountered error while reading file contents using streams..!");
    })
    .pipe(parse())
    .on('data', data => fileContents.push(data))
    .on('end', ()=> cb(null, fileContents))
   
}
//This method will filetDatewithNoChildren it will take two parameters
//first the fileContent and second the callback
//use map if required to filter the data

const filterDataWithNoChildren = (fileContents, cb) => {
  let filteredData = fileContents.map(person => {
    let personData = person.split(', ');
    if (personData[3] == 0) {
      return person
    }
    else {
      return false
    }
  })
//use lodash.compact() if required 
filteredData = lodash.compact(filteredData)
cb(null, filteredData)  
}



module.exports = {
  readFileContentsLineByLine,
  filterFemaleCandidates,
  readFileContentsUsingStream,
 }
