const router = require('express').Router();
const { teacherGetController, teacherPostController, teacherPatchController, teacherDeleteController } = require('../controllers/teacherControllers');
const isAuthenticated = require('../middlewares/isAuthenticated');
const upload = require('../middlewares/uploadMiddleware');
const cpUpload = upload.fields([{ name: 'url', maxCount: 1 }, { name: 'cv', maxCount: 1 }])

router.get('/', teacherGetController);
router.post('/', isAuthenticated, cpUpload, teacherPostController);
router.patch('/', isAuthenticated, teacherPatchController);
router.delete('/', isAuthenticated, teacherDeleteController);

module.exports = router;