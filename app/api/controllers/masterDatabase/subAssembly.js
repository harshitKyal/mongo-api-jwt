const subAssemblyModel = require('../../models/masterDatabase/subAssembly');
module.exports = {

getAll: function(req, res, next) {
  // let moviesList = [];
  subAssemblyModel.find({}, function(err, subAssemblyList){
   if (err){
    next(err);
   } else{
    res.json({status:"success", message: "SubAssembly list Fetched!!!", data:{subAssemblyList: subAssemblyList}});
       
   }
});
 },
 create: function(req, res, next) {
  // console.log(req.body.roleName)
  //  userRoleModel.findOne({RoleName:req.body.roleName},function(err,result){
      // console.log(err)
      // console.log(result)
      // if(err) 
      //    next(err)
      // else if(result)
      //    res.json({status:"error",message:"Role Name already Exist!!!",data:null})
      // else
      // {
        subAssemblyModel.create({  name: "demo" }, function (err, result) {
            if (err) 
            next(err);
            else
            res.json({status: "success", message: "User Role created successfully!!!", data: null});     
         });
      // }
  //  });
 },
}