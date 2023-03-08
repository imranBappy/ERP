const { Schema, model, Types } = require('mongoose');
const Auth = require('./Auth');

const departmentSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is require'],
        min: 2,
        max: 30
    },
    code: {
        type: String,
        required: [true, 'Code is require']
    },
    hod: {
        type: Types.ObjectId,
        ref: 'Auth',
        required: [true, 'The field is require']
    },
    total_std: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

const Department = model('Department', departmentSchema)
module.exports = Department;