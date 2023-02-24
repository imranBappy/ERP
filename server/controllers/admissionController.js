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
        const students = await Student.find({})
            .limit(limit)
            .skip((page - 1) * limit)
        console.log(students);
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


        const newAuth = new Auth({
            name, email, url, role: "Admission",
        })
        const newStudent = new Student({
            auth: newAuth._id,
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
        await newAuth.save();
        await newStudent.save()
        res.json(new Formet({}, "Successfully Submitted!"))
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