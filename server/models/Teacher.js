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
    gender: {
        type: String,
        required: [true, 'Gender is require'],
        enum: ['Male', 'Female', 'Other']
    },
    NID: {
        type: String,
        required: [true, 'NID is require'],
        trim: true,
    },
    salary: {
        type: Number,
        required: [true, 'Salary is require'],
        min: 0,
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

}, { timestamps: true })
const Teacher = model('Teacher', teacherSchema)
module.exports = Teacher