const {
    departmentGetConteroller,
    departmentPostController,
    departmentPatchController,
    departmentDeleteController
} = require('../controllers/departmentControllers')
const router = require('express').Router()

router.get('/', departmentGetConteroller);
router.post('/', departmentPostController);
router.patch('/', departmentPatchController);
router.delete('/', departmentDeleteController);

module.exports = router