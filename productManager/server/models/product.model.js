const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "title is required"],
        minlength: [2, "title must be at least 2 characters long"]
    },
    desc: { 
        type: String ,
        required: [true, "description is required"],
        minlength: [5, "description must be at least 5 characters long"]

    },
    price: {
        type:Number,
        required: [true, "there must be a price"],
    }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;

