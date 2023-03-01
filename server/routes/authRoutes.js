const { singinController, resetController, updateController } = require('../controllers/authControllers');

const router = require('express').Router();

router.post('/', singinController);
router.patch('/update', updateController);
router.post('/reset', resetController);



module.exports = router;