const ocListModel = require('../models/ocList');
module.exports = {
 create: function(req, res, next) {
  console.log(req.body.roleName)
  ocListModel.findOne({OCNumber:req.body.ocNumber},function(err,result){
      console.log(err)
      console.log(result)
      if(err) 
         next(err)
      else if(result)
         res.json({status:"error",message:"Oc Number Exist!!!",data:null})
      else
      {
         userRoleModel.create({  OCNumber: req.body.ocNumber }, function (err, result) {
            if (err) 
            next(err);
            else
            res.json({status: "success", message: "New OC List created successfully!!!", data: null});     
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
}