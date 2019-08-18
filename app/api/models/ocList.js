const mongoose = require('mongoose');

mongoose.pluralize(null);
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
    _id:{
        type:String,
    },
     name : {
        type :String,
        trim : true ,
     },
    },
 CustomerType :{
    _id:{
        type:String,
    },
     name:{
         type:String ,
     },
    },
 BranchID :{
    _id:{
        type:String,
    },
     name :{
         type:String ,
     },
 },
 ProductID :{
    _id:{
        type:String,
    },
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
        _id:String,
        name:String,
        city:String,
        contactNumber:String
    },
Status:{
    name:{
        type:String ,
    }
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
        ID:Number,
        name:String,
        srno:String,

    }
],

});

module.exports = mongoose.model('ocList', ocListSchema);