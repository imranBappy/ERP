const Auth = require("../models/Auth");
const bcrypt = require("bcrypt");
const sendEmail = require("../utils/sentEmail");


<<<<<<< HEAD
exports.adminSignupPostController = async (req, res, next) => {
=======
exports.signupController = async (req, res, next) => {
>>>>>>> mehedi
    try {
        let { name, email, password } = req.body;
        const url = req.file.filename;
        const user = await Auth.findOne({ email: email })
        if (user) {
            return res.status(223).json({ message: 'User Already Exist!' })
        }
        if (password.length < 6) return res.json({ message: 'Min length 6' });
        password = await bcrypt.hash(password, 10);
<<<<<<< HEAD
        const newUser = new Auth({ name, url, email, role: "Admin", password })
=======
        const newUser = Auth({ name, url, email, roll: "Admin", password })
>>>>>>> mehedi
        await newUser.save();
        sendEmail(email, name)
        res.json({
            message: 'Account successfully created!'
        })
    }
    catch (error) {
        next(error)
    }
}
