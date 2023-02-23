// total tution free , payment history, attendance, marks, fees, etc
const { Schema, model, Types } = require('mongoose')

const studentSchema = new Schema({
    phone: {

    },
    group: {
        enum: ['A', 'B', 'C']
    },
    fatherName: {},
    motherName: {},
    guardianEmail: {},
    guardianPhone: {},
    guardianNID: {},
    address: {},
    passingYear: {},
    transcript: {},
    studentId: {},
    boardRoll: {},
    registrationNumber: {},
    admissionYear: {},
    currnetSemester: {
        type: Number,
        default: 1,
        required: true
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
    department: {
        type: ObjectId,
        ref: 'Department'
    },
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
})
