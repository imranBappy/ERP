const { admissionPostController } = require('../controllers/admissionController')
const upload = require('../middlewares/uploadMiddleware')
const router = require('express').Router()

// router.post('/', upload.single('profile'), admissionPostController)
router.post('/', admissionPostController)


module.exports = router;