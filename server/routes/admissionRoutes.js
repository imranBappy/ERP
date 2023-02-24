const { admissionPostController, admissionGetController, admissionAprovePulController } = require('../controllers/admissionController')
const upload = require('../middlewares/uploadMiddleware')
const router = require('express').Router()
const cpUpload = upload.fields([{ name: 'url', maxCount: 1 }, { name: 'transcript', maxCount: 1 }])
router.post('/', cpUpload, admissionPostController)
router.get('/', admissionGetController)
router.put('/', admissionAprovePulController)


module.exports = router;