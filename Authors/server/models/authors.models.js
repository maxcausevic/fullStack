const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    authorName: { 
        type: String,
        required: [true, "nameis required"],
        minlength: [3, "name must be at least 3 characters long"]
    }
}, { timestamps: true });

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;