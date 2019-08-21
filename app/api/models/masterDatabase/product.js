const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const productSchema = new Schema({
 code:{
     type:String,
     required :true,
 },
 name: {
  type: String,  
  required: true,
 },
});
module.exports = mongoose.model('products', productSchema)