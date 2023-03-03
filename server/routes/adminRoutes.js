const { adminSignupPostController } = require('../controllers/adminControllers');

const router = require('express').Router();

router.post('/', adminSignupPostController);


module.exports = router;