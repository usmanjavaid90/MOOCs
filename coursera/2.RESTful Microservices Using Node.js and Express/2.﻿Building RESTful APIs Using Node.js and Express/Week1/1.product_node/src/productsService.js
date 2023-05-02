// Import the necessary dependencies
const lodash = require("lodash");
const productsList = require("./products.json").products;

const getProducts = () => {
  // get all products
  return JSON.stringify(productsList);
}

const getProductsById = (productId, done) => {
  // get a product by ID
  let product = lodash.find(productsList, (prod) => prod.id === productId);

  if (!product) {
    err = "Requested product doesn't exist..!"
    return done(err, JSON.stringify(product));
  }  
  return done(null, JSON.stringify(product));
}

const saveProduct = (newProduct, done) => {
 // save a product
 let product = lodash.find(productsList, prod => prod.id === newProduct.id);

  if (product) {
    err = "Product already exists..!"
    return done(err, JSON.stringify(productsList));
  }

  let newList = productsList
  newList.push(newProduct)
  return done(null, JSON.stringify(newList));
  }

const updateProduct = (productId, updateData, done) => {
  let updatedProductList = productsList;
  // update the product list
  let index = lodash.findIndex(productsList, (prod) => prod.id === productId);
  if (index >= 0) {
    updatedProductList[index].name = updateData.name;
    updatedProductList[index].description = updateData.description;
    updatedProductList[index].price = updateData.price;
    updatedProductList[index].quantity = updateData.quantity;
    return done(null, JSON.stringify(updatedProductList));
  }

  err = "Requested product doesn't exist..!"
  return done(err, JSON.stringify(updatedProductList));
}

const deleteProduct = (productId, done) => {
  // delete a product
  let index = lodash.findIndex(productsList, prod => prod.id === productId)
  if (index >= 0) {
    productsList.splice(index, 1)
    return done(null, JSON.stringify(productsList));
  }
  
  err = "Requested product doesn't exist..!"
  return done(err, JSON.stringify(productsList));
}


module.exports = {
  getProducts,
  getProductsById,
  saveProduct,
  updateProduct,
  deleteProduct
}