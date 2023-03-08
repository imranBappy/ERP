const Auth = require('../models/Auth')
const Teacher = require('../models/Teacher')
const { uuid } = require('uuidv4')
const sendEmail = require('../utils/sentEmail')


exports.teacherGetController = async (req, res, next) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const teachers = await Auth.find({ role: "Teacher" })
            .populate({
                path: 'profile',
                model: Teacher,
                // select: 'phone'
            })
            .limit(limit)
            .skip((page - 1) * limit)
        res.json(teachers);

    } catch (error) {
        next(error)
    }

}
exports.teacherPostController = async (req, res, next) => {
    try {
        const {
            name,
            email,
            phone,
            NID,
            designation,
            salary,
            gender,

        } = req.body;
        // console.log(req.body);
        // return;
        const teacherId = `CMT-${'66'}-${Math.floor(Math.random() * 100)}`
        const cv = req.files.cv[0].filename
        const url = req.files.url[0].filename


        const newTeacher = new Teacher({
            teacherId,
            phone,
            NID,
            cv,
            salary,
            designation,
            gender
        })
        const pass = uuid()
        const newAuth = new Auth({
            profile: newTeacher._id,
            name, email, url, role: "Teacher",
            password: pass,
        })
        await newAuth.save();
        await newTeacher.save()
        await Teacher.findByIdAndUpdate(newTeacher._id,
            { auth: newAuth._id })
        res.json({ error: false, message: "Successfully Submitted!" })
    } catch (error) {
        next(error)
    }

}
exports.teacherPatchController = async (req, res, next) => {

    try {

    } catch (error) {
        next(error)
    }

}

exports.teacherDeleteController = async (req, res, next) => {

    try {

    } catch (error) {
        next(error)
    }

}