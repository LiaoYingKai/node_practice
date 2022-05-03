const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.get('/list', controller.list)

router.get('/:productId', controller.get)

router.post('/', controller.post)

router.put('/:productId', controller.update)

router.delete('/:productId', controller.remove)

module.exports = router;
