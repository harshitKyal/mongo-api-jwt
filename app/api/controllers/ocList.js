const ocListModel = require('../models/ocList');
module.exports = {
 
   getByOCNumber: function(req, res, next) {

      let roleName = req.body.roleName;
      let Status =null;
      let query ={};

      if (roleName == "Admin" || roleName == "QA Team" ) {
         query = {
            "OCNumber":req.body.OCNumber
         }
      }
      else {
         if(roleName == "Sales Team")
            Status = "In Progress - Sales"
         else if (roleName = "Branch/Dealer")
            Status = "In Progress - Branch/Dealer"
         query= {
            "OCNumber":req.body.OCNumber,
            "Status":{
               "name":Status
            }
         }
      }
      console.log(query)
      ocListModel.findOne( query,function(err,result){
         if (result)
            res.json({status:"success",message:"Oc List found!!!",data:{ocList:result}})
         else 
            res.json({status:"error",message:"Invalid OC Number!!!",data:null})
      });

   },
   getByRoleName: function(req, res, next) {
      let roleName = req.body.roleName;
      let Status =null;
      let query = {}
      if(roleName !== "Admin" && roleName !== "QA Team") {
         if(roleName == "Sales Team")
            Status = "In Progress - Sales"
         else if (roleName = "Branch/Dealer")
            Status = "In Progress - Branch/Dealer"
         query= {
            "Status":{
               "name":Status
            }
         }
      }
      if (req.body.Priority) {
         ocListModel.find({"Status.name":Status,"Priority.name":req.body.Priority},function(err,result){
            if(result.length)
               res.json({status:"success",message:"Oc List found!!!",data:{ocList:result}})
            else
               res.json({status:"error",message:"No Oc List found!!!",data:null})
                  
         });
         // query.Priority.name = req.body.Priority
      }else{
         ocListModel.find(query,function(err,result){
            if(result.length)
               res.json({status:"success",message:"Oc List found!!!",data:{ocList:result}})
            else
               res.json({status:"error",message:"No Oc List found!!!",data:null})
                  
         });
      }
      // console.log(query)
      // ocListModel.find(query,function(err,result){
      //    if(result.length)
      //       res.json({status:"success",message:"Oc List found!!!",data:{ocList:result}})
      //    else
      //       res.json({status:"error",message:"No Oc List found!!!",data:null})
               
      // });
   },
   create: function(req, res,next) {

         var ocList = new ocListModel ({
              OCNumber: req.body.OCNumber, // To generate a unique id //
              OCDate: req.body.OCDate,
              OCNotes: req.body.OCNotes,
              Priority: req.body.Priority,
              CustomerType: req.body.CustomerType,
              BranchID: req.body.BranchID,
              ProductID: req.body.ProductID,
              SubAssemblyIDs: req.body.SubAssemblyIDs,
              SpareIDs: req.body.SpareIDs,
              Status:req.body.Status,
              CreatedBy : req.body.CreatedBy,
              UpdatedBy : req.body.UpdatedBy,
              CreatedDate : req.body.CreatedDate,
              UpdatedDate : req.body.UpdatedDate,
              SerialNumbers : req.body.SerialNumbers,
              customer:req.body.customer,
          });

          ocListModel.findOne({
              'OCNumber': req.body.OCNumber
          }, function(err, result) {
              // If email exists //
              if (result)
                  res.json({status:"error",message:"Oc List already Exist!!!",data:null})
              // If email doesn't exists //
              else {
                  // Saving the model to the database //                   
                  ocList.save(function(error,next,result) {
                      // If error //
                      if (error)
                           next(error)
                      // If successfuly saved //
                      else 
                          res.json({status:"success",message:"oc List Added successfully!!!",data:null})
                  });
              }
          });
   },
   getAll: function(req, res, next) {
      ocListModel.find({},function(err, ocList){
      if (err) 
         next(err)
         else 
         res.json({status:"success", message: "OC List fetched!!!", data:{ocList: ocList}});

      })
   },
   updateOC:function(req, res,next) {
      
         var ocList = req.body;
         console.log(req.body._id)
         // Find a particular one inside the products model and then update it //
         ocListModel.findOneAndUpdate({
             _id: req.body._id
         }, ocList, function(err, success) {
             // If success //
             if (success)
               res.json({status:"success", message: "OC Updated Successfully!!!", data:null});
             else 
             res.json({status:"error", message: "Invalid OC ID", data:null});

            });
   },
}