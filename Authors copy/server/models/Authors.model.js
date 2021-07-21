const mongoose = require('mongoose')
const AuthorSchema = new mongoose.Schema({
    name:{
        type: String, 
        required:[true, "name is required"],
        minlength:[3, "must be atleast 3 characters"]
    }
}, {timestamp:true});
module.exports.Author= mongoose.model('Author', AuthorSchema);