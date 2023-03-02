
const { Schema, model, Types } = require('mongoose');
const Auth = require('./Auth');

const paymentSchema = new Schema({
    auth: {
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
        enum: ['Tuition Fee', 'Admission Fee', 'Semester Fee', 'Mid Fee'],
        required: [true, 'The field is require']
    },
    method: {
        type: String,
        enum: ['Bkash', 'Rocket', 'Nagod', 'Bank'],
        required: [true, 'Payment method is require']
    },
    trxId: {
        type: String,
        required: [true, 'transactionId is require']
    },
}, {
    timestamps: true
});

const Payment = model('Payment', paymentSchema);
module.exports = Payment;