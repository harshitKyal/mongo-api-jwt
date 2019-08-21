const ocListModel = require('../models/ocList');
module.exports = {
   
   updateStatus:function(req,res,next){

      let roleName = req.body.roleName;
      let status = req.body.status;
      let installationComplete = req.body.installationComplete;
      let ocId = req.body.ocId;
      let branchName = req.body.branchName;
      let updateStatus;
      let userName = req.body.userName;
      console.log("installaion",installationComplete)
      if (installationComplete)
           updateStatus="Closed";
      else if ((roleName == "Admin" || roleName == "QA Team") && status=="New") 
            updateStatus = "In Progress - Sales";
      else if(roleName=="Sales Team"){
         if(branchName)
            updateStatus="In Progress - Branch/Dealer";
         else
            updateStatus = "Installation Scheduled"; 
      }else
            updateStatus= "Closed";
      let d = new Date()
      query={
         "$push": {
            "StatusLog": {
                  "UserName": userName,
                  "PreviousStatus": status,
                  "ChangedStatus":updateStatus,
                  "Date":d
            }
         },
         "Status":{
            "name":updateStatus
         }
      }
      // console.log("dsadsad",query)

      
      ocListModel.findOneAndUpdate({
         _id: ocId
     }, query, function(err, success) {
         // If success //
         // console.log(success)
         if (success)
            res.json({status:"success", message: "OC Status updated Successfully!!!", data:null});
         else 
            res.json({status:"error", message: "Invalid OC ID", data:err});

        });


   },
   getByOCNumber: function(req, res, next) {

      let roleName = req.body.roleName;
      console.log("function callaed")
      console.log(req.body)
      if (roleName == "Admin" || roleName == "QA Team" || roleName == "Sales Team" ) {
         ocListModel.find({ "OCNumber":req.body.OCNumber},function(err,result){
            if(result)
               res.json({status:"success",message:"Oc List found!!!",data:{ocList:result}})
            else
               res.json({status:"error",message:"No Oc List found!!!",data:err})
                  
         });
         
      } else if (roleName == "Branch/Dealer") {
         if(req.body.branchId){
            ocListModel.find({"OCNumber":req.body.OCNumber,"BranchID._id":req.body.branchId},function(err,result){
               if(result)
                  res.json({status:"success",message:"Oc List found!!!",data:{ocList:result}})
               else
                  res.json({status:"error",message:"No Oc List found!!!",data:err})
                     
            });
         }
      }

   },
   getByRoleName: function(req, res, next) {
      let roleName = req.body.roleName;
      console.log(roleName)
      let Status =null;
      let query = {}
      if(roleName !== "Admin" && roleName !== "QA Team") {
         // console.log("fsdf")
         if(roleName == "Sales Team")
            Status = "In Progress - Sales"
         else if (roleName == "Branch/Dealer")
            Status = "In Progress - Branch/Dealer";
            query= {
               "Status":{
                  "name":Status,
               }
            }
      }
      
      if (req.body.Priority) {
         if (roleName == "Admin" || roleName == "QA Team" ) {
            ocListModel.find({"Priority.name":req.body.Priority , "Status.name" :{ $ne:"Closed" } },function(err,result){
               if(result)
                  res.json({status:"success",message:"Oc List found!!!",data:{ocList:result}})
               else
                  res.json({status:"error",message:"No Oc List found!!!",data:err})
                     
            });
            
         }else if (roleName == "Branch/Dealer") {
            if(req.body.branchId){
               ocListModel.find({"Status.name" :{ $in:["In Progress - Branch/Dealer","Installation Scheduled","Installation Complete"] },"Priority.name":req.body.Priority,"BranchID._id":req.body.branchId},function(err,result){
                  if(result)
                     res.json({status:"success",message:"Oc List found!!!",data:{ocList:result}})
                  else
                     res.json({status:"error",message:"No Oc List found!!!",data:err})
                        
               });
            }
         }else if(roleName == "Sales Team") {
            ocListModel.find({"Status.name" :{ $in:["In Progress - Sales","In Progress - Branch/Dealer","Installation Scheduled","Installation Complete"]  },"Priority.name":req.body.Priority},function(err,result){
               if(result)
                  res.json({status:"success",message:"Oc List found!!!",data:{ocList:result}})
               else
                  res.json({status:"error",message:"No Oc List found!!!",data:err})
                     
            });
         }
      }else if (roleName == "Branch/Dealer") {
         if(req.body.branchId){
            ocListModel.find({"Status.name" :{ $in:["In Progress - Branch/Dealer","Installation Scheduled","Installation Complete"] },"BranchID._id":req.body.branchId},function(err,result){
               if(result)
                  res.json({status:"success",message:"Oc List found!!!",data:{ocList:result}})
               else
                  res.json({status:"error",message:"No Oc List found!!!",data:err})
                     
            });
         }
      }
      else if (roleName == "Sales Team") {
         ocListModel.find({"Status.name" :{ $in:["In Progress - Sales","In Progress - Branch/Dealer","Installation Scheduled","Installation Complete"] }},function(err,result){
           console.log(roleName)
            if(result)
               res.json({status:"success",message:"Oc List found!!!",data:{ocList:result}})
            else
               res.json({status:"error",message:"No Oc List found!!!",data:err})
                  
         });
      }else{
         ocListModel.find({ "Status.name" :{ $ne:"Closed" }} ,function(err,result){
            if(result)
               res.json({status:"success",message:"Oc List found!!!",data:{ocList:result}})
            else
               res.json({status:"error",message:"Something went wrong!!!",data:err})
                  
         });
      }
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
              Customer:req.body.Customer,
              Installation:req.body.Installation,
              CreatedBy : req.body.CreatedBy,
              UpdatedBy : req.body.UpdatedBy,
              CreatedDate : req.body.CreatedDate,
              UpdatedDate : req.body.UpdatedDate,
              SerialNumbers : req.body.SerialNumbers
            //   customer:req.body.customer,
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
                  ocList.save(function(err,next,result) {
                      // If error //
                      if (err)
                        res.json({status:"success",message:"something looks wrong!!!",data:err})
          
                           //next(error)
                      // If successfuly saved //
                      else 
                          res.json({status:"success",message:"OC Added successfully!!!",data:null})
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
   getClosedOCs: function(req, res, next) {
      let roleName = req.body.roleName;
      let branchId = req.body.branchId;

      if(req.body.Priority){
         if(roleName =="Branch/Dealer") {
            ocListModel.find({"Priority.name":req.body.Priority,"Status.name":"Closed","BranchID._id":branchId},function(err, ocList){
               if (err) 
                  next(err)
                  else 
                  res.json({status:"success", message: "OC List fetched!!!", data:{ocList: ocList}});
         
               })
         }else{
            ocListModel.find({"Priority.name":req.body.Priority,"Status.name":"Closed"},function(err, ocList){
               if (err) 
                  next(err)
                  else 
                  res.json({status:"success", message: "OC List fetched!!!", data:{ocList: ocList}});
         
               })
         }   
      }
      else{
         if(roleName =="Branch/Dealer") {
            ocListModel.find({"Status.name":"Closed","BranchID._id":branchId},function(err, ocList){
               if (err) 
                  next(err)
                  else 
                  res.json({status:"success", message: "OC List fetched!!!", data:{ocList: ocList}});
         
               })
         }else{
            ocListModel.find({"Status.name":"Closed"},function(err, ocList){
               if (err) 
                  next(err)
                  else 
                  res.json({status:"success", message: "OC List fetched!!!", data:{ocList: ocList}});
         
               })
         }
      }
   },
   updateOC:function(req, res,next) {

         let d = new Date()
         let roleName = req.body.roleName;
         let updateStatus;
         let ocList = req.body;
         let status  = req.body.status
         let userName = req.body.userName
         let ChangeStausLog;
         if(req.body.Installation){
            let installationDate = req.body.Installation.installationDate;
            if(roleName === "Branch/Dealer"){
               if(installationDate){
                  updateStatus="Installation Scheduled";
                  ocList.Status={};
                  ocList.Status.name = updateStatus;
                  ChangeStausLog={
                     "$push": {
                        "StatusLog": {
                            "UserName": userName,
                            "PreviousStatus": "In Progress - Branch/Dealer",
                            "ChangedStatus":updateStatus,
                            "Date":d
                        }
                    },
                  }
               }
            }
            console.log(ocList)
         }
         // console.log(update)
         let update = Object.assign(ocList, ChangeStausLog);
         console.log("dsadsadas",update)
         ocListModel.findOneAndUpdate({
             _id: req.body._id
         },update, function(err, success) {
             // If success //
             if (success)
               res.json({status:"success", message: "OC Updated Successfully!!!", data:success});
             else 
             res.json({status:"error", message: "Invalid OC ID", data:err});

            });
   },
}