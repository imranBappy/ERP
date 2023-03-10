const { hash } = require("bcrypt");
const Auth = require("../models/Auth");
const Student = require("../models/Student");
const { uuid } = require('uuidv4');
const sendEmail = require("../utils/sentEmail");
const Formet = require("../utils/dataFormet");
const Department = require("../models/Department");

// /admission
exports.admissionGetController = async (req, res, next) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const students = await Auth.find({ role: "Applicant" })
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
            department,
        } = req.body;

        const group = 'A'
        const studentId = `CMT-${group}-${Math.floor(Math.random() * 100)}`
        const transcript = req.files.transcript[0].filename
        const url = req.files.url[0].filename
        const newStudent = new Student({
            studentId,
            phone,
            group,
            fatherName,
            motherName,
            guardianEmail,
            guardianPhone,
            guardianNID,
            address,
            transcript,
            department,
            result: [],
            attendance: [],
            payment: [],
            application: []
        })
        const newAuth = new Auth({
            profile: newStudent._id,
            name, email, url, role: "Applicant",
        })

        await newAuth.save();
        await newStudent.save()
        res.json({ error: false, message: "Successfully Submitted!" })
    } catch (error) {
        next(error)
    }
}
exports.admissionAprovePutController = async (req, res, next) => {
    try {
        const { _id, tutionFee } = req.body
        const password = uuid();
        const hashPass = await hash(password, 10);
        const std = await Auth.findById(_id)
            .populate({
                path: 'profile',
                model: Student,
            })
        await Auth.findOneAndUpdate({ _id }, {
            $set: {
                password: hashPass,
                role: "Student"
            }
        }, { upsert: true });
        await Student.findOneAndUpdate({ _id: std.profile }, {
            $set: {
                tutionFee
            }
        }, { upsert: true });

        await Department.findOneAndUpdate(std['profile']['department'], {
            $push: {
                students: _id
            }
        });
        sendEmail(std.email, std.name, password)
        res.json(new Formet(std, "Successfully Approved!"))
        return
    } catch (error) {
        next(error)
    }
}

exports.admissionRejectDeleteController = async (req, res, next) => {
    try {
        const { _id } = req.query
        const std = await Auth.findByIdAndDelete(_id)
        await Student.findByIdAndDelete(std.profile)
        res.json(new Formet(std, "Successfully Rejected!"))
    } catch (error) {
        next(error)
    }
}