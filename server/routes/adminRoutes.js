const { signupController } = require('../controllers/adminControllers');

const router = require('express').Router();

router.post('/', signupController);
const { adminSignupPostController } = require('../controllers/adminControllers');
const upload = require('../middlewares/uploadMiddleware');


router.post('/', upload.single('url'), adminSignupPostController);


module.exports = router;