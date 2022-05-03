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

module.exports = product