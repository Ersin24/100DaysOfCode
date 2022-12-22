const multer = require('multer')
const uuid = require('uuid').v4

const upload = multer({
    storage: multer.diskStorage({
        destination: 'product-data/images', //Burası resim dosya yolu
        filename: function(req, file, cb){
            cb(null, uuid() + '-' + file.originalname) //benzersiz isim yaptık
        }
    })
})

const configuredMulterMiddleware = upload.single('image') //image name alanını gönderiyoruz

module.exports = configuredMulterMiddleware;