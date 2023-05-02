const todolist = require('./todolist')

//Define a function that gets all the todos from the 
// todolist array declared asynchronously after 2 seconds
getAllTodos = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let allTodos = todolist;
            resolve (allTodos);
        }, 2000)}) 
}
// Define a function to add a todo to the todolist array
createTodo = (todo) => {
    return new Promise((resolve,reject)=>{

        if (todo == undefined) {
            return reject('No data to be added')
        }
        resolve (todolist.push(todo));
   })
}
module.exports ={
    createTodo,getAllTodos
}