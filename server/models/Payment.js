
const { Schema, model, Types } = require('mongoose');
const Auth = require('./Auth');

const paymentSchema = new Schema({
    student: {
        type: Types.ObjectId,
        ref: Auth
    },
    amount: {
        type: Number,
        required: [true, 'Amount is require'],
        min: 1,
    },
    type: {
        type: String,
        enum: ['Student', 'Teacher', 'Admin'],
        required: [true, 'The field is require']

    },
    method: {
        type: String,
        enum: ['Bkash', 'Rocket','Nagod', 'Bank'],
        required: [true, 'Payment method is require']
    },
    transactionId: {
        type: String,
        required: [true, 'transactionId is require']
    },
}, {
    timestamps: true
});

const Payment = model('Payment', paymentSchema);