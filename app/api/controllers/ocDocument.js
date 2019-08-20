const ocDocumentModel = require('../models/ocDocument');
var multer = require('multer');

module.exports = {
 save: function(req, res, next) {

   let fileInfo = req.body.FileInfo;
   var ocDocument = new ocDocumentModel ({
      ocid:fileInfo.ocid, // To generate a unique id //
      documentname: fileInfo.documentname,
      uploadedby: fileInfo.uploadedby,
      uploadeddate: fileInfo.uploadeddate,
      filePath:"fileUploads/" + fileInfo.documentname
   });

   ocDocument.save(function(err,result) {
      if (err)
        res.json({status:"error",message:"something looks wrong!!!",data:err});
      else 
          res.json({status:"success",message:"Oc Document Uploaded successfully!!!",data:null})
  });
   
 },
 getByOCID: function(req, res, next) {

   ocDocumentModel.find( {ocid:req.body.ocid},function(err,result){
      if (result)
         res.json({status:"success",message:"Oc with Documents found!!!",data:{ocDocument:result}})
      else if (err)
         res.json({status:"error",message:"Invalid OC ID!!!",data:null})
   });

},
}