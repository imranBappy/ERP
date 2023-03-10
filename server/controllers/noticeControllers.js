const Notice = require('../models/Notice')
exports.noticeGetController = async (req, res, next) => {
    try {
        const allData = await Notice.find({});
        res.json(allData);
    } catch (error) {
        next(error);
    }

}

exports.noticePostController = async (req, res, next) => {
    try {
        const newNotice = new Notice({
            title: req.body.title,
            notice: req.file.filename,
        })
        await newNotice.save()
        res.json({ error: false, message: "Successfully Submitted!" })

    } catch (error) {
        next(error);
    }

}