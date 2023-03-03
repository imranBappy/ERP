const { paymentGetController, paymentPostController } = require('../controllers/paymentController')
const router = require('express').Router()

router.post('/', paymentPostController)
router.post('/', paymentGetController)

module.exports = router;