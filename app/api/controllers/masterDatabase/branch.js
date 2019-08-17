const branchModel = require('../../models/masterDatabase/branch');
module.exports = {

getAll: function(req, res, next) {
  // let moviesList = [];
  branchModel.find({}, function(err, branchList){
   if (err){
    next(err);
   } else{
    res.json({status:"success", message: "Branch list Fetched!!!", data:{branchList: branchList}});
       
   }
});
 },
 
}