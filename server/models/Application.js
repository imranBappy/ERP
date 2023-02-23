const { Schema, model, Types } = require('mongoose');

const applicationSchema = new Schema({
    teacher: {
        type: Types.ObjectId,
        ref: 'Auth'
    },
    sub: {
        type: String,
        min: 10
    }
    ,
    text: {
        type: String,
        min: 10
    }
}, { timestamps: true });



const application = model('Application', applicationSchema);