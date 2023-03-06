const multer = require("multer")
const path = require('path')
const UPLOAD_FOLDER = './public/uploads'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOAD_FOLDER)
    },
    filename: (req, file, cb) => {
        const exName = path.extname(file.originalname);
        const fileName = file.originalname
            .replace(exName, '')
            .toLowerCase()
            .split(" ")
            .join('-') + Date.now();
        cb(null, fileName + exName);
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: (1024 * 1024) * 10 // mb
    },
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype === 'image/png' ||
            file.mimetype === 'image/jpeg' ||
            file.mimetype === 'image/jpg' ||
            file.mimetype === 'application/pdf'
        ) {
            cb(null, true)
        } else {
            cb(new Error("Only .jpeg, .jpg, .png, .pdf formet allowed!"))
        }
    }
})

module.exports = upload;