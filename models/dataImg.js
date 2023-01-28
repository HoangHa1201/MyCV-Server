const mongoose = require('mongoose');

const dataImgSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    linkImg: {
        type: String,
    }

});

module.exports = mongoose.model('DataImg', dataImgSchema);