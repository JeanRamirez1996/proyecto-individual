const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    firstName: { 
        type: String, 
        required:[true, "Name field must be completed"],
        minlength:[3, "Name must be at least 3 characters long"]
    },
    lastName: { 
        type: String,
        required:[true, "Price field must be completed"],
        minlength:[3, "Name must be at least 3 characters long"]
    },
    address: { 
        type: String,
        required:[true, "Price field must be completed"],
        minlength:[3, "Name must be at least 3 characters long"]
    }
}, { timestamps: true });
module.exports.Person = mongoose.model('Person', PersonSchema);