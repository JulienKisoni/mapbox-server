const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pinSchema = new Schema({
    latitude: { type: Number },
    longitude: { type: Number }
});

module.exports = mongoose.model('Pin', pinSchema);