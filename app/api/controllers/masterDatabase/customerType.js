const customerTypeModel = require('../../models/masterDatabase/customerType');
module.exports = {

getAll: function(req, res, next) {
  // let moviesList = [];
  customerTypeModel.find({}, function(err, customerTypeList){
   if (err){
    next(err);
   } else{
    res.json({status:"success", message: "customerType list Fetched!!!", data:{customerTypeList: customerTypeList}});
       
   }
});
 },
}