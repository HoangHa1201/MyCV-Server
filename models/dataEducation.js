const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    major: {
        type: String,
        required: true
    },
    university: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('DataEdu', dataSchema);