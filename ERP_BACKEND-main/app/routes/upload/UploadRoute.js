const express=require('express')
const router=express.Router()
const uploadCtrl=require('../../controller/upload/UploadController') 
const multer = require('multer');
const path = require('path');

const uploadStorageNew = multer.diskStorage({
  destination: './uploads/new', 
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const uploadNew = multer({ storage: uploadStorageNew ,limits: {fieldSize: 1 * 1024 * 1024},});

// Storage config for /fingerprint route  
router.post('/new', uploadNew.single('file'), uploadCtrl.uploadFile);

module.exports = router;