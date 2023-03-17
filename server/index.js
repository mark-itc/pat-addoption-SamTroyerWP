const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const petsRouter = require('./routes/pets');



dotenv.config();

const app = express()


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('connected to Pet Adoption Database!')
    } catch (error) {
        throw error
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('mongoDB disconnected')
})

mongoose.connection.on('connected', () => {
    console.log('mongoDB is connected')
})

// middlewares
app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);

app.listen(5000, () => {
    connect()
    console.log('connected on port 5000')
})