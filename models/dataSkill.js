const mongoose = require('mongoose');

const dataSkillsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: Array,
        default: [],
        required: true
    }
});

module.exports = mongoose.model('DataSkills', dataSkillsSchema);