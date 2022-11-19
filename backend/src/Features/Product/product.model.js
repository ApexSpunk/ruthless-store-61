const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    tagline : {
        type : String,
        required : true

    },
    price : {
        type : Number,
        required : true
    },
    mrp : {
        type : Number,
        required : true
    },
    color : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    images : {
        type : Array,
        required : true
    },
    views : {
        type : Number,
        required : true
    }

}, {
    versionKey: false,
}
);

const Product = mongoose.model('product', productSchema);

module.exports = Product;