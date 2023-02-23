const Auth = require("../models/Auth");
const Student = require("../models/Student");

exports.admissionPostController = async (req, res, next) => {
    try {
        const { name, email, phone, roll } = req.body;
        // const url = req.file.filename;
        const newAuth = new Auth({
            name, email, url: 'url ', role: 'Admission'
        })

        const data = await newAuth.save();
        console.log(data);
        // const newStudent = new Student({
        //     auth: id,
        //     phone: phone,
        //     result: []
        // })
        // await newStudent.save()
        res.json(data)
    } catch (error) {
        next(error)
    }
}