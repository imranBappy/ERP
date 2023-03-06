const { authGetController, singinPostController, resetController, updateController } = require('../controllers/authControllers');

const router = require('express').Router();


router.get('/', authGetController);
router.post('/', singinPostController);
router.patch('/update', updateController);
router.post('/reset', resetController);


module.exports = router;