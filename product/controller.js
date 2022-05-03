const { randomUUID } = require('crypto');
const Product = require('./model')

function getList() {
  const list = Object.keys(Product).map(id => ({
    id,
    ...Product[id]
  }))

  return list
}

function list(req, res) {
  res.status(200).send({
    code: 20000,
    data: getList()
  })
}

function get(req, res) {
  const productId = req.params.productId
  const product = Product[productId]
  if (!product) {
    res.status(400).send({
      code: 40001,
      message: 'Can not find Product Id'
    })
    return;
  }

  res.status(200).send({
    code: 20000,
    data: {
      ...product,
      id: productId
    }
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
  const id = randomUUID()
  Product[id] = {
    ...body
  }

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
  const product = Product[productId]
  if (!product) {
    res.status(400).send({
      code: 40001,
      message: 'Can not find Product Id'
    })
    return;
  }
  // 判斷欄位是否在裡面

  Product[productId] = {
    ...product,
    ...body,
  }

  res.status(200).send({
    code: 20000,
    message: "Edit Success",
    data: getList()
  })
}

function remove(req, res) {
  const productId = req.params.productId
  const product = Product[productId]
  if (!product) {
    res.status(400).send({
      code: 40001,
      message: 'Can not find Product Id'
    })
    return;
  }

  delete Product[productId]

  res.status(201).send({
    code: 20001,
    message: 'Delete success',
    data: getList()
  })
}

module.exports = {
  list,
  get,
  post,
  update,
  remove,
}