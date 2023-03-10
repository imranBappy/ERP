const { hash } = require("bcrypt");
const Auth = require("../models/Auth");
const Student = require("../models/Student");
const { uuid } = require('uuidv4');
const sendEmail = require("../utils/sentEmail");
const Formet = require("../utils/dataFormet");
const Department = require("../models/Department");

// /admission
exports.studentGetController = async (req, res, next) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const students = await Auth.find({ role: "Student" })
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

