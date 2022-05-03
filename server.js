const express = require('express')
const app = express()
const port = 3000
const product = require('./product');

// express 4.16+
// another https://stackoverflow.com/questions/10005939/how-do-i-consume-the-json-post-data-in-an-express-application
app.use(express.json());
app.use('/static', express.static('public/images'));

app.use('/product', product);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
