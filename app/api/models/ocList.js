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
 OcDate: {
  type: Date,
  trim: true,
  required: true
 },
 OCNotes: {
    type: String,
    trim: true,
    required: true
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
 Branch :{
     name :{
         type:String ,
     },
 },
 ProductId :{
     name:{
         type:String ,
     },
  },
 SubAssemblyIds:[
     {
         name :{
             type:String,
         },
     }
 ],
SpareIds :[
    {
        name:String,
    }
],
Status:{
    name:String ,
},
CreatedBy:{
    type:Date,
},
UpdatedBy:{
    type:Date,
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