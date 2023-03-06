const { adminSignupPostController } = require('../controllers/adminControllers');
const upload = require('../middlewares/uploadMiddleware');

const router = require('express').Router();

router.post('/', upload.single('url'), adminSignupPostController);


module.exports = router;