const Auth = require("../models/Auth");
const Student = require("../models/Student");

exports.admissionPostController = async (req, res, next) => {
    try {
        const { name, email, phone } = req.body;
        const url = req.file;
        const newAuth = new Auth({
            name, email, url
        })

        const id = await newAuth.save();
        const newStudent = new Student({
            auth: id,
            phone: phone,
            result: []
        })
        await newStudent.save()
    } catch (error) {
        next(error)
    }
}