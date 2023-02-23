const { singinController, resetController, updateController } = require('../controllers/authController');

const router = require('express').Router();

router.post('/', singinController);
router.patch('/update', updateController);
router.post('/reset', resetController);



module.exports = router;