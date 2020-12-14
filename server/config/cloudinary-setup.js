const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

const storage = new CloudinaryStorage({
  cloudinary,
  folder: 'property-pics',
  allowedFormats: ['jpg', 'png'],
  filename: function (req, res, cb) {
    cb(null, res.originalname);
  },
});

module.exports = multer({ storage });
