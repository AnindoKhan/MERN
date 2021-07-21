const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema({
    name: { type: String },
    imgUrl: { type: String },
    chests:{ type: String},
    catchPhrase: {type: String},
    crewPosition: {type: String},
}, { timestamps: true });
module.exports.Pirate = mongoose.model('Pirate', PirateSchema);