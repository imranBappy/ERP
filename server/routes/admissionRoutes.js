const { admissionPostController, admissionGetController, admissionAprovePulController, admissionGetByIdController } = require('../controllers/admissionController')
const upload = require('../middlewares/uploadMiddleware')
const router = require('express').Router()
const cpUpload = upload.fields([{ name: 'url', maxCount: 1 }, { name: 'transcript', maxCount: 1 }])
router.post('/', cpUpload, admissionPostController)
router.get('/',admissionGetController)
router.put('/', admissionAprovePulController)

router.get('/:stdId', admissionGetByIdController)
module.exports = router;