const mongoose = require('mongoose');

const BoilerPlateSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "title is required"],
        minlength: [3, "name must be at least 3 characters long"]
    }
}, { timestamps: true });

const BoilerPlate = mongoose.model('BoilerPlate', BoilerPlateSchema);

module.exports = BoilerPlate;