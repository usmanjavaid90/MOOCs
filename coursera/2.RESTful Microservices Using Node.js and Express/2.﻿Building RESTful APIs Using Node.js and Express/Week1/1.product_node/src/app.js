//Import the necessary dependencies
const http = require('http');
// Define a prot at which the server will run
const PORT = process.env.PORT || 5000;
const productsService = require("./productsService");
const getRequestData = require('./utils');

const server = http.createServer(async (req, res) => {
  // Get all products
  if (req.url === '/api/v1/products' && req.method === 'GET') {
    const products = await productsService.getProducts();
    res.writeHead(200, {'content-type':'application/json'});
    res.end(products);
  }
  // Get a product with specified id
  else if (req.url.match(/\/api\/v1\/products\/([0-9]+)/) && req.method === 'GET') {
    try {
      const prodId = parseInt(req.url.split("/")[4]);
      await productsService.getProductsById(prodId, (err, result) => {
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
  // Create a new product
  else if (req.url === '/api/v1/products' && req.method === 'POST') {
    try {
      const productData = await getRequestData(req);
      
     await productsService.saveProduct(JSON.parse(productData), (err, result)=>{
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
  // Update a specific product
  else if (req.url.match(/\/api\/v1\/products\/([0-9]+)/) && req.method === 'PUT') {
    try {
      const prodId = parseInt(req.url.split("/")[4]);
      const productData = await getRequestData(req);
      await productsService.updateProduct(prodId, JSON.parse(productData), (err, result) => {
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
  // Delete a specific Product
  else if (req.url.match(/\/api\/v1\/products\/([0-9]+)/) && req.method === 'DELETE') {
    try {
      const prodId = parseInt(req.url.split("/")[4]);
      await productsService.deleteProduct(prodId, (err, result) => {
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

});
// listen for client requests
server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
})

server.on('error', (error)=>{
  if (error.code =='EADRINUSE') {
    console.log('Port already in use')
  }
})