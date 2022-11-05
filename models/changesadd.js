const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const changesSchema = new Schema({
    Name: String,
    Number:String,
    Address:String,
    Product:String,
    Price:String,
    Reason:String,
});
module.exports =mongoose.model('changesadd',changesSchema);
