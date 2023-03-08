const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const petsRouter = require('./routes/pet-routes')
const userRouter = require('./routes/user-routes')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const multer = require('multer')
const app = express();

dotenv.config()

const imageModel = require('./model/Image')

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/api', userRouter);
app.use('/pets', petsRouter)


mongoose.connect(process.env.MongoDB_URI)
    .then(() => console.log('Connected to Database'))
    .then(() => 
        app.listen(5000))
    .then(() => console.log('listening on port 5000'))
    .catch((e) => console.log(e));

// const Storage = multer.diskStorage({
//     destination: 'uploads',
//     filename:(req, file, cb) => {
//         cb(null, file.originalname)
//     }
// })

// const upload = multer({
//     storage: Storage
// }).single('testImage')

// app.post('/upload', (req, res) => {
//     upload(req, res, (err) => {
//         if(err) {
//             console.log(err)
//         }
//         else {
//             const newImage = new imageModel( {
//                 name: req.body.name,
//                 image: {
//                     data: req.file.filename,
//                     contentType: 'image/png'
//                 }
//             })
//             newImage.save()
//             .then(() => res.send('successfully uploaded'))
//             .catch(err => console.log(err))
//         }
//     })
// })