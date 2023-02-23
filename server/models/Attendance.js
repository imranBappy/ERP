
const { Schema, model } = require('mongoose');


const attendanceSchema = new Schema({
    subject: {},
    teacher: {
        type: ObjectId,
        ref: 'Auth'
    },
    report: {},
}, { timestamps: true })

const Attendance = model('Attendance', attendanceSchema)
model.exports = Attendance;