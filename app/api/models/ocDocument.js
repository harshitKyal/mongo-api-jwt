const mongoose = require('mongoose');

mongoose.pluralize(null);
//Define a schema
const Schema = mongoose.Schema;
const ocDocumentSchema = new Schema({
 ocid: {
  type: String,
  required: true
 },
 documentname: {
  type: String
 },
uploadedby:{
    type:String,
},
uploadeddate :{
    type: Date,
},
dochash:{
    type:String,
}

});

module.exports = mongoose.model('ocDocument', ocDocumentSchema);