const mongoose = require('mongoose');

const dataAboutSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    linkImg: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    linkCV: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    faceBook: {
        type: String,
        required: true
    },
    linkedin: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('DataAbout', dataAboutSchema);