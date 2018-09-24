const mongoose = require('mongoose');
const Husky = mongoose.Schema({
    idImg: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    like: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Husky',Husky)