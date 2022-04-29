const express = require('express')
const app = express()
const port = 3000

let products = [{
  id: 1,
  name: 'test1',
  price: 100
},{
  id: 2,
  name: 'test2',
  price: 200
}];

// express 4.16+
// another https://stackoverflow.com/questions/10005939/how-do-i-consume-the-json-post-data-in-an-express-application
app.use(express.json());
app.use('/static', express.static('public/images'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/products', (req, res) => {
  res.status(200).send({
    code: 20000,
    data: products
  })
})

app.get('/product/:productId', (req, res) => {
  const productId = req.params.productId
  const product = products.find(item => String(item.id) === productId)
  if (!product) {
    res.status(400).send({
      code: 40001,
      message: 'Can not find Product Id'
    })
    return;
  }

  res.status(200).send({
    code: 20000,
    data: product
  })
})

app.post('/product', (req, res) => {
  const body = req.body 
  if (!body.name || !body.price) {
    res.status(400).send({
      code: 40001,
      message: 'Filed not valid'
    })
    return;
  }

  const id = products.length + 1
  products.push({
    ...body,
    id
  })

  res.status(201).send({
    code: 20001,
    message: "Add Product Success",
    data: {
      id
    }
  })
})

app.put('/product/:productId', (req, res) => {
  const productId = req.params.productId
  const body = req.body 
  const product = products.find(item => String(item.id) === productId)
  if (!product) {
    res.status(400).send({
      code: 40001,
      message: 'Can not find Product Id'
    })
    return;
  }
  // 判斷欄位是否在裡面

  products = products.map(item => {
    if (String(item.id) === productId) {
      return {
        ...item,
        ...body,
      }
    }
    return item
  })

  console.log(products)

  res.status(200).send({
    code: 20000,
    message: "Edit Success",
    data: products
  })
})

app.delete('/product/:productId', (req, res) => {
  const productId = req.params.productId
  const product = products.find(item => String(item.id) === productId)
  if (!product) {
    res.status(400).send({
      code: 40001,
      message: 'Can not find Product Id'
    })
    return;
  }

  products = products.filter(item => String(item.id) !== productId)

  res.status(201).send({
    code: 20001,
    message: 'Delete success',
    data: products
  })
})
