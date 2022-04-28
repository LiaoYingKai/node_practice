const express = require('express')
const app = express()
const port = 3000

const products = [
  {
    productName: "apple watch",
    prize: "300",
    productId: "id1",
  },
  {
    productName: "shose",
    prize: "10",
    productId: "id2",
  },
];

app.use('/static', express.static('public/images'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/products', (req, res) => {
  res.send(products)
})

app.get('/product/:productId', (req, res) => {
  const product = {
    productName: 'Name',
    productId: req.params.productId,
    prize: '300'
  }
  res.send(product)
})
