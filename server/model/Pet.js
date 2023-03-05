const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const petSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

petSchema.set('timestamps', true)

module.exports = mongoose.model("Pet", petSchema)
