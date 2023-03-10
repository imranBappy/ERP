const { studentGetController } = require('../controllers/studentControllers')
const router = require('express').Router();

router.get('/', studentGetController)


module.exports = router;