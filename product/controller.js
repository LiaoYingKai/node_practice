const {
  hasProduct,
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
  if (!hasProduct(productId)) {
    res.status(400).send({
      code: 40001,
      message: 'Can not find Product Id'
    })
    return;
  }

  res.status(200).send({
    code: 20000,
    data: getProduct(productId)
  })
}

function post (req, res) {
  const body = req.body
  if (!body.name || !body.price) {
    res.status(400).send({
      code: 40001,
      message: 'Filed not valid'
    })
    return;
  }
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
  if (!hasProduct(productId)) {
    res.status(400).send({
      code: 40001,
      message: 'Can not find Product Id'
    })
    return;
  }
  // 判斷欄位是否在裡面

  updateProduct(productId, body)

  res.status(200).send({
    code: 20000,
    message: "Edit Success",
    data: getProducts()
  })
}

function remove(req, res) {
  const productId = req.params.productId
  if (!hasProduct(productId)) {
    res.status(400).send({
      code: 40001,
      message: 'Can not find Product Id'
    })
    return;
  }

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