const router = require('express').Router();
const { teacherGetController, teacherPostController, teacherPatchController, teacherDeleteController } = require('../controllers/teacherControllers');
const isAuthenticated = require('../middlewares/isAuthenticated');
const upload = require('../middlewares/uploadMiddleware');
const Auth = require('../models/Auth');
const Student = require('../models/Student');
const cpUpload = upload.fields([{ name: 'url', maxCount: 1 }, { name: 'cv', maxCount: 1 }])

router.get('/', async (req, res) => {
    try {
        const result = await Student.deleteMany()
        console.log(result);
    } catch (error) {
        console.log(error);
    }


});


module.exports = router;