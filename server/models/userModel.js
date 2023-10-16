const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  
    email: {
         required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    fullname: {
        required: true,
        type: String
    },
    status: {
        required: true,
        type: String
    },
    card_holder_name: {
        required: true,
        type: String
    },
     card_number: {
        required: true,
        type: String
    },
    expiry_date: {
        required: true,
        type: Date
    },
    cvv: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('User', dataSchema)