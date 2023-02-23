const { Schema, model } = require('mongoose');

const paymentSchema = new Schema({
    student: {
        type: ObjectId,
    },
})


