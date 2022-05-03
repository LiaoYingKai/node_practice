const { randomUUID } = require('crypto');

const product = {
  [randomUUID()]: {
    name: 'test1',
    price: 100
  },
  [randomUUID()]: {
    name: 'test2',
    price: 200
  },
}

function hasProduct(id) {
  return !!product[id]
}

function getProducts() {
  return Object.keys(product).map(id => ({
    id,
    ...product[id]
  }))
}

function getProduct(id) {
  return {
    id,
    ...product[id]
  }
}

function addProduct(data) {
  const id = randomUUID()
  product[id] = {
    ...data
  }

  return id;
}

function updateProduct(productId, data) {
  product[productId] = {
    ...product[productId],
    ...data,
  }
}

function deleteProduct(productId) {
  delete product[productId]
}

module.exports = {
  hasProduct,
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
}