const mongoose = require('mongoose');
//Define a schema
mongoose.pluralize(null);
const Schema = mongoose.Schema;
const spareSchema = new Schema({
 name: {
  type: String,  
  required: true,
 },
});
module.exports = mongoose.model('spare', spareSchema)