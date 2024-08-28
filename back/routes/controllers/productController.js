const Product = require('../../models/products')

//POST PRODUCT
async function addProduct(req, res) {
  
  try {
    const { name, size, unitaryPrice, description, imgUrl } = req.body
    const newProduct = new Product({name, size, unitaryPrice, description, imgUrl})

    // if(req.file) {
    //   const { filename } = req.file
    //   newProduct.setImgUrl(filename)
    // }
    const productStored =  await newProduct.save()

    return res.json({productStored})

  } catch (error) {console.log(error)}
}

//GET PRODUCTS
async function getProducts(req, res) {

  try {
    const products = await Product.find()

    return res.json(products)

  } catch (error) {console.log(error)}
}

async function getProduct(req, res) {

  try {
    const product = await Product.findById(req.params.id)

    return res.json(product)

  } catch (error) {console.log(error)}
}

//PUT PRODUCTS
async function updateProduct(req, res) {

  try {
    const { name, size, unitaryPrice, description, imgUrl } = req.body
    const updateIdProduct = {name, size, unitaryPrice, description, imgUrl}
    
    const productUpdated = await Product.findByIdAndUpdate(req.params.id, updateIdProduct)

    return res.json({productUpdated})

  } catch (error) {console.log(error)}
}

//DELETE PRODUCTS
async function deleteProduct(req, res) {
  try {
    await Product.findByIdAndRemove(req.params.id)

    return res.json({status: 'Product Deleted'})

  } catch (error) {console.log(error)}
}

module.exports = {
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
}