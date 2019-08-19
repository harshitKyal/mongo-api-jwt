const ocDocumentModel = require('../models/ocDocument');
module.exports = {
 save: function(req, res, next) {
   console.log("sadsd")
   var ocDocument = new ocDocumentModel ({
      ocid: req.body.ocid, // To generate a unique id //
      documentname: req.body.documentname,
      uploadedby: req.body.uploadedby,
      uploadeddate: req.body.uploadeddate,
      dochash: req.body.dochash
   });
   ocDocument.save(function(err,result) {
      if (err)
        res.json({status:"success",message:"something looks wrong!!!",data:err});
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