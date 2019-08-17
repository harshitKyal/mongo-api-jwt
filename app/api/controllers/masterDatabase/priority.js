const priorityModel = require('../../models/masterDatabase/priority');
module.exports = {

getAll: function(req, res, next) {
  // let moviesList = [];
  priorityModel.find({}, function(err, priorityList){
   if (err){
    next(err);
   } else{
    res.json({status:"success", message: "SubAssembly list Fetched!!!", data:{priorityList: priorityList}});
       
   }
});
 },

}