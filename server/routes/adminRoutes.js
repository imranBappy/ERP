<<<<<<< HEAD
const { adminSignupPostController } = require('../controllers/adminControllers');
const upload = require('../middlewares/uploadMiddleware');

const router = require('express').Router();

router.post('/', upload.single('url'), adminSignupPostController);
=======
const { signupController } = require('../controllers/adminControllers');

const router = require('express').Router();

router.post('/', signupController);
>>>>>>> mehedi


module.exports = router;