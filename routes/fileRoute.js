const router = require("express").Router()
const {upload} = require("../middlewares/multer")
const {
    UploadFile,
    downloadFile,
    fetchAllFiles,
    deleteFile,
    deleteMultipleFiles,
    get_files_by_user_id
} = require("../controller/fileController")


router.post('/file-upload', upload.single('file'), UploadFile);
router.post('/file-download/:id', downloadFile);
router.post('/page/:pageNumber', fetchAllFiles);
router.post('/delete-file/:fileId', deleteFile)
router.post('/delete-selected-file', deleteMultipleFiles)
router.get('/users/:userId', get_files_by_user_id)

module.exports = router
