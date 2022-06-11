const multer = require('multer');

const path = require("path");

//Multer MiddleWare
const storage = multer.diskStorage({
  destination: './media',
  filename: (req, file, cb) => {
    cb(null, `${+new Date()}${file.originalname}`);
  },
});

const upload = multer({
    storage,
    fileFilter: function (req, file, callback) { //Only allow Images to be Uploded
        let ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    },
    limits:{ // Restrict the Size Of the Image to 1MB
        fileSize: 1024 * 1024
    }

});

module.exports = upload;