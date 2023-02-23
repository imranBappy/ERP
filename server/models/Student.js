// total tution free , payment history, attendance, marks, fees, etc
const { Schema, model, Types } = require('mongoose')

const studentSchema = new Schema({
    phone: {
        typeof: Number,
        required: [true, 'Phone is require']

    },
    group: {
        type: String,
        enum: ['A', 'B', 'C'],
        required: [true, 'Group is require']
    },
    fatherName: {
        type: String,
        required: [true, 'Father name is require'],
    },
    motherName: {
        type: String,
        required: [true, 'Mother Name is require'],
    },
    guardianEmail: {
        type: String,
        required: [true, 'Email is require']
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
        required: [true,' Address is require']
    },
    passingYear: {
        type: Number,
        required: [true, ' This field is require']
    },
    transcript: {
        type: data,
        required: [true, ' This field is require']
    },
    studentId: {
        type: String,
        required: [true, ' Student Id is require']
    },
    boardRoll: {
        type: Number,
        required: [true, 'Roll is require']
    },
    registrationNumber: {
        type: Number,
        required: [true, 'Reg number is require']
    },
    admissionYear: {
        type: String,
        required: [true, 'This field is require']
    },
<<<<<<< HEAD
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
=======
    currnetSemester: {},
    result: {},
    attendance: {},
>>>>>>> 0c81b372cffd4a77a8e2a9a6f7718bb071c2d1fd
    department: {
        type: Types.ObjectId,
        ref: 'Department'
    },
<<<<<<< HEAD
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
=======
    payment: {},
    application: {},
},
{timestamps: true}
)
>>>>>>> 0c81b372cffd4a77a8e2a9a6f7718bb071c2d1fd
