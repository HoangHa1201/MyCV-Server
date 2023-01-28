const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    major: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('DataExp', dataSchema);