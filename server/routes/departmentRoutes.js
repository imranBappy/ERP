const {
    departmentGetConteroller,
    departmentPostController,
    departmentPatchController,
    departmentDeleteController
} = require('../controllers/departmentControllers');

const isAuthenticated = require('../middlewares/isAuthenticated');
const router = require('express').Router()
const upload = require('../middlewares/uploadMiddleware');

router.get('/', departmentGetConteroller);
router.post('/', isAuthenticated, upload.single('url'), departmentPostController);
router.patch('/', isAuthenticated, departmentPatchController);
router.delete('/', isAuthenticated, departmentDeleteController);

module.exports = router