const spareModel = require('../../models/masterDatabase/spare');
module.exports = {

getAll: function(req, res, next) {
  // let moviesList = [];
  spareModel.find({}, function(err, spareList){
   if (err){
    next(err);
   } else{
    res.json({status:"success", message: "Spare list Fetched!!!", data:{spareList: spareList}});
       
   }
});
 },
}