const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('./model')

function list(req, res) {
  res.status(200).send({
    code: 20000,
    data: getProducts()
  })
}

function get(req, res) {
  const productId = req.params.productId

  res.status(200).send({
    code: 20000,
    data: getProduct(productId)
  })
}

function post (req, res) {
  const body = req.body
  const id = addProduct(body)

  res.status(201).send({
    code: 20001,
    message: "Add Product Success",
    data: {
      id
    }
  })
}

function update (req, res) {
  const productId = req.params.productId
  const body = req.body

  updateProduct(productId, body)

  res.status(200).send({
    code: 20000,
    message: "Edit Success",
    data: getProducts()
  })
}

function remove(req, res) {
  const productId = req.params.productId
  deleteProduct(productId)

  res.status(201).send({
    code: 20001,
    message: 'Delete success',
    data: getProducts()
  })
}

module.exports = {
  list,
  get,
  post,
  update,
  remove,
}