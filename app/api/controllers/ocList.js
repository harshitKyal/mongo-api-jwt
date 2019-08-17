const ocListModel = require('../models/ocList');
module.exports = {
 
   getByOcNumber: function(req, res, next) {
      console.log(req.body.roleName)
      let roleName = req.body.roleName;
      let Status =null;
      if (roleName == "Admin" || roleName == "QA Team" ) {
         ocListModel.findOne({ OCNumber:req.body.OCNumber},function(err,result){
            if (result)
               res.json({status:"success",message:"Oc List found!!!",data:{ocList:result}})
            else 
               res.json({status:"error",message:"Invalid OC Number!!!",data:null})
         });
      }
      else {
         if(roleName == "Sales Team")
            Status = "In Progress - Sales"
         else if (roleName = "Branch/Dealer")
            Status = "In Progress - Branch/Dealer"
      
         ocListModel.findOne({ OCNumber:req.body.OCNumber , "Status.name":Status },function(err,result){
            if (result)
               res.json({status:"success",message:"Oc List found!!!",data:{ocList:result}})
            else 
               res.json({status:"error",message:"Invalid OC Number!!!",data:null})
         });
      }
   },
   getByRoleName: function(req, res, next) {
      let roleName = req.body.roleName;
      let Status =null;
      if (roleName == "Admin" || roleName == "QA Team" ) 
         Status = null;
      else if(roleName == "Sales Team")
         Status = "In Progress - Sales"
      else if (roleName = "Branch/Dealer")
         Status = "In Progress - Branch/Dealer"

      ocListModel.find({"Status.name":Status},function(err,result){
         console.log(result)
         if(result)
            res.json({status:"success",message:"Oc List found!!!",data:{ocList:result}})
         else
            res.json({status:"error",message:"No Oc List found!!!",data:null})
               
      });
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
         // Find a particular one inside the products model and then update it //
         ocListModel.findOneAndUpdate({
             OCNumber: parseInt(req.params.OCNumber)
         }, ocList, function(err, success) {
             // If success //
             if (success)
               res.json({status:"success", message: "OC Updated Successfully!!!", data:null});
             else 
             res.json({status:"error", message: "Invalid OC number", data:null});

            });
   },
}