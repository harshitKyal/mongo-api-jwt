const userModel = require('../models/users');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
module.exports = {
 create: function(req, res, next) {
  
  userModel.create({ name: req.body.name, email: req.body.email, password: req.body.password ,RoleId:req.body.RoleId}, function (err, result) {
      if (err)
       res.json({status:"error",message:"Something is wrong",data:null})
      else
       res.json({status: "success", message: "New User added successfully!!!", data: null});
      
    });
 },
login: function(req, res, next) {
         userModel.findOne({email:req.body.email}, function(err, userInfo){
            if (err) {
            next(err);
            } else if(userInfo) {
               if(bcrypt.compareSync(req.body.password, userInfo.password)) {
                  const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '1h' });
                  delete userInfo["password"]
                  let userI = userInfo
                  // console.log(userI)
                  delete userI
                  console.log(delete userI.password)
                  console.log(userI)
                  // userI.forEach(el=>{
                  //    console.log(el)
                  // })
                  // console.log(userInfo)
                  res.json({status:"success", message: "Login Successfully!!!", data:{user: userInfo, token:token}});
               }else{
                  res.json({status:"error", message: "Invalid email/password!!!", data:null});
               }
            }
            else{
               res.json({status:"error", message: "Invalid email/password!!!", data:null});
            }
         
    });
 },
}