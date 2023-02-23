const { admissionPostController, admissionGetController, admissionAprovePulController } = require('../controllers/admissionController')
const upload = require('../middlewares/uploadMiddleware')
const router = require('express').Router()

// router.post('/', upload.single('profile'), admissionPostController)
router.post('/', admissionPostController)

router.get('/', admissionGetController)
router.put('/', admissionAprovePulController)


module.exports = router;