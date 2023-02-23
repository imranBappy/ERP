const { Schema, model, ObjectId } = require('mongoose')

const departmentSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    code: {},
    hod: {
        type: ObjectId,
        ref: 'Auth'
    },
})

const Department = model('Department', departmentSchema)
module.exports = Department;