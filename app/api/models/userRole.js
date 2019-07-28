const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const UserRoleSchema = new Schema({
 RoleName: {
  type: String,
  trim: true,  
  unique:true,
  required: true,
 }
});
module.exports = mongoose.model('UserRole', UserRoleSchema);