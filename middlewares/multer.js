var multer = require('multer');
var memoryStorage = multer.memoryStorage();
// var storage = multer.memoryStorage();
// var multerUploads = multer({ storage }).any();



// const upload = multer({ storage });

const upload = multer({
    storage: memoryStorage,
    dest: '/temp'
})


module.exports = {  upload };
