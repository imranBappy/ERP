const Auth = require("../models/Auth")
const Department = require("../models/Department")
const Teacher = require("../models/Teacher")

exports.departmentGetConteroller = async (req, res, next) => {
    try {
        const departments = await Department.find()
        res.json(departments)

    } catch (error) {
        next(error)
    }
}
exports.departmentPostController = async (req, res, next) => {
    try {
        // console.log(req.body);
        // console.log(req.file.filename);
        const url = req.file.filename;

        const teacher = await Teacher.findOne({ teacherId: req.body.hod })
        if (!teacher) {
            res.json({
                message: 'Head Of Department Not Found',
                error: true,
                data: null
            })
        }
        const newDepartment = new Department({ ...req.body, url, hod: teacher.auth, teachers: [teacher.auth] })
        const newDepartment_res = await newDepartment.save()
        res.json({
            message: 'Department created successfully',
            error: false,
            data: newDepartment_res
        })
    } catch (error) {
        next(error)
    }
}
exports.departmentPatchController = async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
}
exports.departmentDeleteController = async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
}