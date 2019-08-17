const productModel = require('../../models/masterDatabase/product');
module.exports = {

getAll: function(req, res, next) {
  let moviesList = [];
  productModel.find({}, function(err, productList){
   if (err){
    next(err);
   } else{
    res.json({status:"success", message: "Product list Fetched!!!", data:{productList: productList}});
       
   }
});
 },
}