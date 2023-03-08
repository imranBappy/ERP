const Auth = require("../models/Auth")
const Department = require("../models/Department")
const Teacher = require("../models/Teacher")

exports.departmentGetConteroller = async (req, res, next) => {
    try {
        const departments = await Department.find()
        res.json({ data: departments })

    } catch (error) {
        next(error)
    }
}
exports.departmentPostController = async (req, res, next) => {
    try {
        const teacher = await Teacher.findOne({ teacherId: req.body.hod })
        if (!teacher) {
            res.json({
                message: 'Head Of Department Not Found',
                error: true,
                data: null
            })
        }
        res.body.hod = teacher.auth;
        console.log(req.body);
        const newDepartment = new Department(req.body)
        const res = await newDepartment.save()
        console.log({ res })
        res.json({
            message: 'Department created successfully',
            error: false,
            data: res
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