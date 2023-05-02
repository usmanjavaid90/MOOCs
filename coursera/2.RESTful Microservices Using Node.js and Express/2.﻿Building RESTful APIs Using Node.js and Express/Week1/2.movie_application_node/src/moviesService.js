// Import the axios library
const axios = require('axios')

const getMovies = (done) => {
  // get all movies
  axios.get('http://localhost:3000/movies')
    .then((res) => done(null, JSON.stringify(res.data)))
    .catch((error) => done(JSON.stringify(error), null))
}

const getMoviesById = (movieId, done) => {
  // get movie by id
  axios.get(`http://localhost:3000/movies/${movieId}`)
    .then((res) => done(null, JSON.stringify(res.data)))
    .catch((error) => done(JSON.stringify(error), null))
  
}

const saveMovie = function (newMovie, done) {
  // save the details of a movie read from the request body
  axios.post('http://localhost:3000/movies', JSON.parse(newMovie))
    .then((res) => done(null, JSON.stringify(res.data)))
    .catch((error) => done(JSON.stringify(error), null))
}

const updateMovie = function (movieId, updateData, done) {
 // update movie details of a specific movie
 axios.put(`http://localhost:3000/movies/${movieId}`,JSON.parse(updateData))
    .then((res) => done(null, JSON.stringify(res.data)))
    .catch((error) => done(JSON.stringify(error), null))
}

const deleteMovieById = function (movieId, done) {
  // delete a specific movie 
  axios.delete(`http://localhost:3000/movies/${movieId}`)
    .then((res) => done(null, JSON.stringify(res.data)))
    .catch((error) => done(JSON.stringify(error), null))
}

module.exports = {
  getMovies,
  getMoviesById,
  saveMovie,
  updateMovie,
  deleteMovieById
}
