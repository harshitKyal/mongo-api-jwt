const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const ocListSchema = new Schema({
 OCNumber: {
  type: Number,
  required: true,
  unique:true ,
  trim: true,
 },
 OCDate: {
  type: Date,
  trim: true
//   required: true
 },
 OCNotes: {
    type: String,
    trim: true
    // required: true
},
 Priority : {
     name : {
        type :String,
        trim : true ,
     },
    },
 CustomerType :{
     name:{
         type:String ,
     },
    },
 BranchID :{
     name :{
         type:String ,
     },
 },
 ProductID :{
     name:{
         type:String ,
     },
  },
 SubAssemblyIDs:[
     {
         name :{
             type:String,
         },
     }
 ],
SpareIDs :[
    {
        name:String,
    }
],
Customer :{
        name:String,
        city:String,
        contactNumber:String
    },
Status:{
    name:String ,
},
CreatedBy:{
    type:String,
},
UpdatedBy:{
    type:String,
},
CreatedDate :{
    type: Date,
},
UpdatedDate:{
    type:Date,
},
SerialNumbers:[
    {
        name:String,
        srno:String,

    }
],

});

module.exports = mongoose.model('ocList', ocListSchema);