const { Schema, model } = require('mongoose');

const resultSchema = new Schema({
    student: {
        type: ObjectId,
        ref: 'Auth'
    },
    subject: {
        type: ObjectId,
        ref: 'Subject'
    },
    marks: {},
    grade: {},
}, { timestamps: true });

const Result = model('Result', resultSchema);
module.exports = Result;