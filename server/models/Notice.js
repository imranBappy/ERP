const mongoose = require('mongoose');

const noticeScema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    notice: {
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = Notice = mongoose.model('NoticeBoard', noticeScema);