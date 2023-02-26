const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const router = require('./routes/pet-routes')
const cors = require('cors')
const app = express();

dotenv.config()

app.use(express.json());
app.use(cors());
app.use("/pets", router);


mongoose.connect(process.env.MongoDB_URI)
    .then(() => console.log('Connected to Database'))
    .then(() => 
        app.listen(5000))
    .then(() => console.log('listening on port 5000'))
    .catch((e) => console.log(e));
