const { Schema, model, Types } = require('mongoose')
const teacherSchema = new Schema({
    auth: {
        type: Types.ObjectId,
        ref: 'Auth',
        require: true
    },
    teacherId: {
        type: String,
        required: [true, 'ID is require'],
        trim: true,
    },
    name: {
        type: String,
        required: [true, 'Name is require'],
        trim: true,
    },
    gender: {
        type: String,
        required: [true, 'Gender is require'],
        enum: ['Male', 'Female', 'Other']
    },
    phone: {
        type: String,
        required: [true, 'Phone is require'],
        trim: true,
    },
    designation: {
        type: String,
        required: [true, 'Designation is require'],
        trim: true,
    },
    cv: {
        type: String,
        required: [true, 'CV is require'],
        trim: true,
    },
    password: {
        type: String,
    }
},{ timestamps: true })
module.exports = model('Teacher', teacherSchema)