const mongoose = require('mongoose');
const FoodSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required:[true, "Name field must be completed"],
        minlength:[3, "Name must be at least 3 characters long"]
    },
    type: { 
        type: String, 
        required:[true, "Type field must be completed"],
        minlength:[3, "Type must be at least 3 characters long"]
    },
    price: { 
        type: Number,
        required:[true, "Price field must be completed"],
        min: 0,
        max: 100
    },
    description: {
        type: String
    }
    
}, { timestamps: true });
module.exports.Food = mongoose.model('Food', FoodSchema);