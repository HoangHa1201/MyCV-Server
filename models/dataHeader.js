const mongoose = require('mongoose');

const dataHeaderSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('DataHeader', dataHeaderSchema);