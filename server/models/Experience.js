const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
    
    },
    location: {
        type: String,
    },
    start_date: {
        type: String,
    },
    end_date: {
        type: String,
    }
});

module.exports = mongoose.model('Experience', ExperienceSchema);