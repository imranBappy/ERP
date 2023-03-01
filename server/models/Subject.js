const { Schema, model, Types } = require('mongoose')

const subjectSchema = new Schema({
    auth: {
        type: Types.ObjectId,
        ref: 'Auth',
        require: true
    },
    name: {
        type: String,
        require: [true, 'Name is require']
    },
    code: {
        type: String,
        require: [true, 'Name is require']
    },
    teacher: {
        type: Types.ObjectId,
        ref: 'Auth'
    }
}, { timestamps: true })

const Subject = model('Subject', subjectSchema);

module.exports = Subject;