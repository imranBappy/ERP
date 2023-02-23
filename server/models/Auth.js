const { Schema, model, Types } = require('mongoose')
const emailValidator = require('../utils/emailValidator')



const authScheme = Schema({
    name: {
        type: String,
        required: [true, 'Name is require!'],
        min: 2,
        max: 30
    },
    url: {
        type: String,
        required: [true, 'Url is require!'],
        min: 2,
    },
    role: {
        type: String,
        required: [true, 'Role is require!'],
        enum: ['student', 'teacher', 'admin'],
        min: 2,
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
    ,

    profile: {
        type: Types.ObjectId,
        refPath: 'role'
    }
}, { timestamps: true })

const Auth = model('Auth', authScheme)

module.exports = Auth;