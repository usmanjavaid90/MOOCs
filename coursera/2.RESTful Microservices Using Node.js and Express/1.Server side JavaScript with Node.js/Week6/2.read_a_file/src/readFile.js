const fs = require("fs");
// import the lodash library
const lodash = require("lodash");

// Read the file data and return the data in the resolved Promise
// Read the file data and return the data in the resolved Promise
const read = (fileName) => {
    return new Promise((resolve, reject) => {
      fs.readFile(fileName, (error, data)=>{
        if (error) {
          reject ("Encountered error while reading file contents..!");
        }
        resolve(data);
      })
    });
  };
// Define a function to Convert the file content to upper case and return the result in the resolved Promise
const convertToUpperCase = (fileContents) => {
  return new Promise((resolve, reject) => {
    if (fileContents == undefined) {
        reject ("Encountered error while reading file contents..!")
    }
    
    else {
        let finalData = [];
        let myArray = fileContents.toString().split(",");
        for(let element of myArray) {
            let data = lodash.toUpper(element);
            finalData.push(data)
        }
        resolve (finalData)
      }
  });
};
// Define a function to read and convert the file contents, use the then and catch blocks here
const readAndConvertFileContents = async(fileName, cb) => {
  let content = await read(fileName).catch(error => cb(error));
  let upper = await convertToUpperCase(content);
  cb(null,upper)
};

module.exports = {
  readAndConvertFileContents,
};