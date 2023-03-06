const Notice = require('../models/Notice');
const upload = require('../middlewares/uploadMiddleware');
const router = require('express').Router()
const {noticeGetController,noticePostController} =require('../controllers/noticeControllers');

router.post('/',upload.single('notice_pdf_file'), noticePostController)
router.get('/',noticeGetController)

module.exports = router;