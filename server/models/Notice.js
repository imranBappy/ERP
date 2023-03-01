const mongoose = require('mongoose');

const noticeScema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    file:{
        type: String,
        required: true
    },
},{timestamps:true})

module.exports = Notice = mongoose.model('NoticeBoard',noticeScema);