const Auth = require("../models/Auth");
const bcrypt = require("bcrypt");
const sendEmail = require("../utils/sentEmail");
var jwt = require('jsonwebtoken');

<<<<<<< HEAD

=======
exports.authGetController = async (req, res, next) => {
    try {
        console.log(req.query.id);
        const user = await Auth.findById(req.query.id)
        res.json({
            isAuthintication: true,
            data: user
        })
    } catch (error) {
        next(error)
    }
}
>>>>>>> imran
exports.signupController = async (req, res, next) => {
    try {
        let { name, email, password } = req.body;
        const user = await Auth.findOne({ email: email })
        if (user) {
            return res.status(223).json({ message: 'User Already Exist!' })
        }
        if (password.length < 6) return res.json({ message: 'Min length 6' });
        password = await bcrypt.hash(password, 10);
        const newUser = Auth({ name, email, password })
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

exports.singinPostController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const std = await Auth.findOne({ email: email });
        if (!std) {
            return res.json({
                isAuthintication: false,
                message: "Account is not exit"
            })
        }
        const match = await bcrypt.compare(password, std.password);

        if (!match) {
            return res.json({
                isAuthintication: false,
                message: "Password is waring"
            })
        }

        const token = jwt.sign({
            data: { id: std._id }
        }, process.env.JWT_SECRET, { expiresIn: '7d' })
        return res.json({
            isAuthintication: true,
            data: std,
            message: "Account Success Fully Singin",
            token: token
        })
    }
    catch (error) {
        next(error)
    }
}

exports.updateController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
    }
    catch (error) {
        next(error)
    }
}

exports.resetController = async (req, res, next) => {
    try {
        const { email, password } = req.body;

    }
    catch (error) {
        next(error)
    }
}
