//import fs module
const fs = require('fs');
//The getProducts function take done as callback
//It will read the product.json file

const getProducts = function(done){ 
  //parse the filecontent and save it in another varible say productdata
  //return the callback with first parameter as undefined and second parameter as productdata

  fs.readFile("src/products.json", (err, fileContent)=> {
    if(err) {
      return done ("Encountered error while getting products data");
    }

    let productData = JSON.parse(fileContent);
    return done(undefined, productData);
  })       
}
//The function getProductById will take two parameters first the id and second the callback
//It will read the product.json file
const getProductById = function(id,done){
    //write all the logical steps
    //return the callback with first parameter as undefined and second parameter as productDetails
    fs.readFile('src/products.json', (err, fileContent)=> {
      if(err) {
        return done("Encountered error while getting products data");
      }
  
      let productData = JSON.parse(fileContent);
      const fetchedProduct = productData.find(prod => prod.id == id);
      if (fetchedProduct === undefined) {
        return done("No product found for requested id");
      }
      return done(undefined, fetchedProduct);
    })      
}

//The saveProductDetails method will take productDetails and done as callback
//It will read the product.json file
const saveProductDetails = function (ProductDetails, done) {
  //write all the logical steps
  //parse the filecontent and save it in another varible say productdata
  //push the productDetails in the productData
  //Write the productData into the file 
  //return the callback with undefined and ProductDetails
  fs.readFile('src/products.json', (err, fileContent)=> {
    if(err) {
      return done("Encountered error while getting products data");
    }
    let productData = JSON.parse(fileContent);
    
    ProductDetails.id = productData.at(-1).id + 1;

    productData.push(ProductDetails);
    fs.writeFile('src/products.json', JSON.stringify(productData), (err, updatedContent) => {
      if (err) {
        return done("Encountered error while saving product")
      }

      return done(undefined, ProductDetails)
    })
  })
  }

  //The method deleteProductById will take productId and done as parameters
  //It will read the product.json file

  const deleteProductById = function(productId, done){
    //Write all the logical steps
     //return the callback with first parameter as undefined and second parameter as productDetails
     fs.readFile('src/products.json', (err, fileContent)=> {
      if(err) {
        return done("Encountered error while getting products data");
      }
      let productData = JSON.parse(fileContent);
      let index = productData.findIndex(prod => prod.id == productId)
      
      if (index === -1) {
        return done("Product is not in the list");
      }
  
      productData.splice(index, 1);
      fs.writeFile('src/products.json', JSON.stringify(productData), (err, updatedContent) => {
        if (err) {
          return done("Encountered error while deleting product")
        }
  
        return done(undefined, updatedContent)
      })    
    })
    }
    //Handle the exception return response as 400 with status as some error msg
  

module.exports ={
    getProducts,
    getProductById,
    saveProductDetails,
    deleteProductById
}

