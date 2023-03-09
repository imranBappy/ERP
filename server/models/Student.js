// total tution free , payment history, attendance, marks, fees, etc
const { Schema, model, Types } = require('mongoose')

const studentSchema = new Schema({
    isAdmitted: {
        type: String,
        enum: ['No', 'Yes', 'Panding'],
        default: 'No',
    },
    department: {
        type: Types.ObjectId,
        required: [true, 'Department is require'],
        ref: 'Department',
    },
    phone: {
        type: String,
        required: [true, 'Phone is require']
    },
    group: {
        type: String,
        enum: ['A', 'B', 'C'],
        required: [true, 'Group is require']
    },
    tutionFee: {
        type: Number,
        default: 0,
    },
    fatherName: {
        type: String,
        required: [true, 'Father name is require'],
    },
    motherName: {
        type: String,
        required: [true, 'Mother Name is require'],
    },
    guardianPhone: {
        type: String,
        required: [true, 'Number is require'],
    },
    guardianNID: {
        type: Number,
        required: [true, ' NID is require'],
    },
    address: {
        type: String,
        required: [true, ' Address is require']
    },
    transcript: {
        type: String,
        required: [true, ' This field is require']
    },
    studentId: {
        type: String,
        required: [true, ' Student Id is require']
    },
    boardRoll: {
        type: Number,
    },
    registrationNumber: {
        type: Number,
    },
    currnetSemester: {
        type: Number,
        default: 1,
    },
    result: [
        {
            type: Types.ObjectId,
            ref: 'Result'
        }
    ],
    attendance: [
        {
            type: Types.ObjectId,
            ref: 'Attendance'
        }
    ],
    payment: [
        {
            type: Types.ObjectId,
            ref: 'Payment'
        }
    ],
    application: [
        {
            type: Types.ObjectId,
            ref: 'Application'
        }
    ],
}, { timestamps: true })
const Student = model('Student', studentSchema)
module.exports = Student;