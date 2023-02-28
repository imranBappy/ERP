const { hash } = require("bcrypt");
const Auth = require("../models/Auth");
const Student = require("../models/Student");
const { uuid } = require('uuidv4');
const sendEmail = require("../utils/sentEmail");
const Formet = require("../utils/dataFormet");

// /admission
exports.admissionGetController = async (req, res, next) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const students = await Auth.find({})
            .populate({
                path: 'profile',
                model: Student,
                // select: 'phone'
            })
            .limit(limit)
            .skip((page - 1) * limit)
        res.json(students);
    } catch (error) {
        next(error)
    }
}

exports.admissionGetByIdController = async (req, res, next) => {
    try {
        const { stdId } = req.params;

        const students = await Auth.findById(stdId)
            .populate({
                path: 'profile',
                model: Student,
                // select: 'phone'
            })

        res.json(students);
    } catch (error) {
        next(error)
    }
}
exports.admissionPostController = async (req, res, next) => {
    try {
        const {
            name,
            email,
            phone,
            fatherName,
            motherName,
            guardianEmail,
            guardianPhone,
            guardianNID,
            address,
        } = req.body;
        const group = 'A'
        const studentId = `CMT-${group}-${Math.floor(Math.random() * 100)}`
        const transcript = req.files.transcript[0].filename
        const url = req.files.url[0].filename

        const newStudent = new Student({
            phone,
            group,
            fatherName,
            motherName,
            guardianEmail,
            guardianPhone,
            guardianNID,
            address,
            transcript,
            studentId,
            result: [],
            attendance: [],
            payment: [],
            application: []
        })

        const newAuth = new Auth({
            profile: newStudent._id,
            name, email, url, role: "Students",
        })
        await newAuth.save();
        await newStudent.save()
        res.json({ message: "Successfully Submitted!" })
    } catch (error) {
        next(error)
    }
}
exports.admissionAprovePulController = async (req, res, next) => {
    try {
        const { _id } = req.body
        const password = uuid();
        const hashPass = await hash(password, 10);
        const std = await Student.findById(_id)
        await Student.findOAndUpdate(_id, {
            $set: {
                password: hashPass,
                role: "Student"
            }
        });
        sendEmail(std.email, std.name, password)
        res.json(Formet(std, "Successfully Approved!"))
    } catch (error) {
        next(error)
    }
}

