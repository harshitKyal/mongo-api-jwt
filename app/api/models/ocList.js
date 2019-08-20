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
        name:{
            type:String
        }
    }
],
Customer :{
        _id:{
            type:String
        },
        name:{
            type:String,
        },
        city:{
            type:String,
        },
        contactNumber:{
            type:String
        }
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
Installation:{
    installationDate:{
        type:Date,
    },
    installationComplete :{
        type:Boolean,
    },
    invoiceDate:{
        type:Date,
    },
    installationTechnician:{
        type:String,
    },
    technicianContact:{
        type:String,
    },
    transport:{
        type:String,
    },
    invoiceNumber:{
        type:String,
    }

},
SerialNumbers:[
    {
        ID:{
            type:String,
        },
        name:{
            type:String,
        },
        srno:{
            type:String,
        }

    }
],
StatusLog:[
    {
        UserName:{
            type:String,
        },
        PreviousStatus:{
            type:String
        },
        ChangedStatus:{
            type:String,
        },
        Date:{
            type:Date
        }
    }
]

});

module.exports = mongoose.model('ocList', ocListSchema);