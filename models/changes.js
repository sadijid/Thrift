const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const changeSchema = new Schema({
    Name: String,
    Number:String,
    Address:String,
    Product:String,
    total_usage:String,
    expected_amount:String,
    imag:String,
});

module.exports = mongoose.model('changes',changeSchema);


