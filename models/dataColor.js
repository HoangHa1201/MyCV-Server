const mongoose = require('mongoose');

const dataColorSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    method: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('DataColor', dataColorSchema);