const { signupController } = require('../controllers/adminControllers');

const router = require('express').Router();

router.post('/', signupController);


module.exports = router;