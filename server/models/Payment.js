
const { Schema, model } = require('mongoose');

const paymentSchema = new Schema({
    student: {},
    amount: {},
    type: {},
    method: {},
    transactionId: {},
}, {
    timestamps: true
});

const Payment = model('Payment', paymentSchema);