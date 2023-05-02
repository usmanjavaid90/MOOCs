// Define a function to calculate the total marks and return a promise 
const calculateTotalMarks = (math,english,science,social,language) =>{
    return new Promise((resolve,reject)=>{
        if (math == undefined || english == undefined || science == undefined || social == undefined || language == undefined) {
            return reject('Null values for marks');
        }
        let total = math + english + science + social + language;
        resolve(total);
        }) 
}
// Define a function to calculate average marks and return a promise
const calculateAverageMarks = (totalMarks) =>{
    return new Promise((resolve,reject)=>{
        resolve(totalMarks / 5);
    }) 
}
// Define a function to calculate grade and return a promise
const calculateGrade = (averageMarks)=>{
    return new Promise((resolve,reject)=>{
        let grade;

        if (averageMarks >= 90){
            grade = 'A+'
        }
        else if (averageMarks >= 80) {
            grade = 'A'
        }
        else if (averageMarks >= 70) {
            grade = 'B'
        }
        else if (averageMarks >= 60) {
            grade = 'C'
        }
        else if (averageMarks >= 50) {
            grade = 'E'
        }
        else if (averageMarks < 40) {
            grade = 'F'
        }

        resolve(grade)
    })   
}

module.exports = {
    calculateAverageMarks,calculateGrade,calculateTotalMarks
}
