const ocListModel = require('../models/ocList');
const counterModel = require('../models/masterDatabase/counter');


   
module.exports = {
   
   modbusHMI: function(req, res, next) {
     // movieModel.findByIdAndUpdate(req.params.movieId,{name:req.body.name}, function(err, movieInfo){
       let jsonData =[32,43,231,43,100,143132]
        res.json({data:jsonData});
    //   }
     // });
     },
   updateStatus:function(req,res,next){

      let roleName = req.body.roleName;
      let status = req.body.status;
      let installationComplete = req.body.installationComplete;
      let ocId = req.body.ocId;
      let branchName = req.body.branchName;
      let updateStatus;
      let userName = req.body.userName;
      
      let changeStatusFlag =true;
      // console.log("insal",status,roleName)
      if (status == "Installation Complete" )
         updateStatus = "Closed";
      else if ((roleName == "Admin" || roleName == "QA Team") && status=="New") 
         updateStatus = "In Progress - Sales";
      else if(roleName=="Sales Team" && branchName)
         updateStatus="In Progress - Branch/Dealer";
      else
         changeStatusFlag = false;

      // console.log("update Status",updateStatus)
      if (changeStatusFlag){
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
         ocListModel.findOneAndUpdate({
            _id: ocId
         }, query, function(err, success) {
            if (success)
               res.json({status:"success", message: "OC Status updated Successfully!!!", data:null});
            else 
               res.json({status:"error", message: "Invalid OC ID", data:err});
         });
      }
      else
         res.json({status:"error", message: "Invalid Transfer", data:null});
   },
   getByOCNumber: function(req, res, next) {

      let roleName = req.body.roleName;
      console.log("function callaed")
      console.log(req.body)
      if (roleName == "Admin" || roleName == "QA Team" || roleName == "Sales Team" ) {
         ocListModel.find({ "OCNumber":req.body.OCNumber},function(err,result){
            if(result)
            {
               // console.log(result[0])
               res.json({status:"success",message:"Oc List found!!!",data:{ocList:result}})
            }
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
      // console.log(roleName)
      let Status =null;
      let query = {}
      // if(roleName !== "Admin" && roleName !== "QA Team") {
      //    // console.log("fsdf")
      //    if(roleName == "Sales Team")
      //       Status = "In Progress - Sales"
      //    else if (roleName == "Branch/Dealer")
      //       Status = "In Progress - Branch/Dealer";
      //       query= {
      //          "Status":{
      //             "name":Status,
      //          }
      //       }
      // }
      
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
         //   console.log(roleName)
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
            //   OCNumber: req.body.OCNumber, // To generate a unique id //
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
              SerialNumbers : req.body.SerialNumbers,
            //   OCNumber :getValueForNextSequence("item_id"),
         
            //   customer:req.body.customer,
          });
          console.log("OCLst",ocList.OCNumber)
          ocListModel.findOne({
              'OCNumber': req.body.OCNumber
          }, function(err, result) {
              // If email exists //
              if (result)
                  res.json({status:"error",message:"Oc List already Exist!!!",data:null})
              // If email doesn't exists //
              else {
                  // Saving the model to the database //                   
                  ocList.save(function(err,result) {
                      // If error //
                     //  console.log("rsule",result)
                     
                      ocList.nextCount(function(err, count) {
                        console.log("ccccc",count)
                        // count === 101 -> true
                 
                        ocList.resetCount(function(err, nextCount) {
                           
                           console.log("next",nextCount)
                            // nextCount === 100 -> true
                 
                        });
                 
                    });
                      if (err)
                        res.json({status:"success",message:"something looks wrong!!!",data:err})
          
                           //next(error)
                      // If successfuly saved //
                      else 
                          res.json({status:"success",message:"OC Added successfully!!!",data:result.OCNumber})
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
         let PreviousStatus  = req.body.Status.name
         let userName = req.body.userName
         let ChangeStausLog;
         let changeStatusFlag =false ;
         let update;
         update = ocList;
                  
         if(req.body.Installation){

            let installationDate = req.body.Installation.installationDate;
            if(req.body.Installation.installationComplete){
               updateStatus="Installation Complete";
               changeStatusFlag = true ;
            }
            else if(installationDate){
                  changeStatusFlag = true ;
                  updateStatus="Installation Scheduled";
               }
            

            if (changeStatusFlag){
               ocList.Status={};
               ocList.Status.name = updateStatus;
               ChangeStausLog={
                  "$push": {
                     "StatusLog": {
                           "UserName": userName,
                           "PreviousStatus": PreviousStatus,
                           "ChangedStatus":updateStatus,
                           "Date":d
                     }
                  },
               }
               update = Object.assign(ocList, ChangeStausLog);
            }
         }
         
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