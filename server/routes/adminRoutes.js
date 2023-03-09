const { signupController } = require('../controllers/adminControllers');
const router = require('express').Router();
const { adminSignupPostController } = require('../controllers/adminControllers');
const upload = require('../middlewares/uploadMiddleware');

router.post('/', upload.single('url'), adminSignupPostController);

module.exports = router;