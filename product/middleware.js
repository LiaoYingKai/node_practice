const {hasProduct} = require("./model");

function addLog(req, res, next) {
  const productId = req.params.productId;
  console.log('productId:', productId);
  console.log(req.method, req.url, new Date().getTime());
  next();
}

function checkId(req, res, next) {
  const productId = req.params.productId;
  if (productId && !hasProduct(productId)) {
    res.status(401).send({
      code: 40101,
      message: "Can not find Product Id",
    });
    return;
  }
  next();
}

function checkBody(req, res, next) {
  const body = req.body;
  if (!body.name || !body.price) {
    res.status(401).send({
      code: 40102,
      message: "Filed not valid",
    });
    return;
  }
  next();
}

module.exports = {
  addLog,
  checkId,
  checkBody,
};
