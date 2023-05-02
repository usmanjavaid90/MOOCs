// Import the required dependencies
const http = require("http");
const moviesService = require("./moviesService");
const getRequestData = require("./utils");

// Define the port at which the application will run
const PORT = 5000;

// Define the server
const server = http.createServer(async (req, res) => {
  // Get all movies
  if (req.url === '/api/v1/movies' && req.method === 'GET') {
    try {
      await moviesService.getMovies((err, result) => {
        if (err) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(err);
        }
        else {
          res.writeHead(200, {'content-type':'application/json'});
          res.end(result);
        }
    });
  }
    catch (error) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(error.message);
  }
}
  
  // Get a movie with specified id
  else if (req.url.match(/\/api\/v1\/movies\/([0-9]+)/) && req.method === 'GET') {
    try {
      const movieId = parseInt(req.url.split("/")[4]);
      await moviesService.getMoviesById(movieId, (err, result) => {
        if (err) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(err);
        }
        else {
          res.writeHead(200, {'content-type':'application/json'});
          res.end(result);
        }
      })      
    }
    catch (error) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(error.message);
    }
  }
  // Save movie details
  else if (req.url === '/api/v1/movies' && req.method === 'POST') {
    try {
      const movieData = await getRequestData(req);
      await moviesService.saveMovie((movieData), (err, result)=>{
      if (err){
        res.writeHead(400, { "Content-Type": "application/json" })
        res.end(err)
      }
      else {
        res.writeHead(201, {'content-type':'application/json'})
        res.end(result)
      }
    })
  }
    catch(error) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(error.message);
    }
  }
  // Update a specific movie
  else if (req.url.match(/\/api\/v1\/movies\/([0-9]+)/) && req.method === 'PUT') {
    try {
      const movieId = parseInt(req.url.split("/")[4]);
      const movieData = await getRequestData(req);
      await moviesService.updateMovie(movieId, movieData, (err, result) => {
        if (err) {
          res.writeHead(400, { "Content-Type": "application/json" })
          res.end(err)
        }
        else {
          res.writeHead(200, {'content-type':'application/json'})
          res.end(result)
        }
      })      
    }
    catch (error) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(error.message);
    }
    

  }
  // Delete a specific movie
  else if (req.url.match(/\/api\/v1\/movies\/([0-9]+)/) && req.method === 'DELETE') {
    try {
      const movieId = parseInt(req.url.split("/")[4]);
      await moviesService.deleteMovieById(movieId, (err, result) => {
        if (err) {
          res.writeHead(400, { "Content-Type": "application/json" })
          res.end(err)
        }
        else {
          res.writeHead(200, {'content-type':'application/json'})
          res.end(result)
        }
      })      
    }
    catch (error) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(error.message);
    }
  }
  // If no route present capture in the else part
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end("404 The resource requested could not be found on this server");
  }
});
// listen to the server on the specified port
server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
server.on("error", (error) => {
  if (error.code === "EADRINUSE") {
    console.log("Port already in use");
  }
});
