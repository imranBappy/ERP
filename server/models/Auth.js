
const { Schema, model } = require('mongoose')
const emailValidator = require('../utils/emailValidator')



const authScheme = Schema({
    name: {
        type: String,
        required: [true, 'Name is require!'],
        min: 2,
        max: 30
    },
    email: {
        type: String,
        required: [true, 'Email is require!'],
        lowercase: true,
        validate: {
            validator: (v) => emailValidator(v)
        },
        message: props => `${props.value} is a invalid email`,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Password is require!']
    }
}, { timestamps: true })

const Auth = model('Auth', authScheme)

module.exports = Auth;