const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const petsRouter = require('./routes/pet-routes')
const userRouter = require('./routes/user-routes')
const cors = require('cors')
const app = express();

dotenv.config()

app.use(cors());
app.use(express.json());
app.use('/api', userRouter);
app.use('/pets/', petsRouter)


mongoose.connect(process.env.MongoDB_URI)
    .then(() => console.log('Connected to Database'))
    .then(() => 
        app.listen(6000))
    .then(() => console.log('listening on port 6000'))
    .catch((e) => console.log(e));