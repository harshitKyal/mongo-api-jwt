
// console.log(fileUploadPath)
const express = require('express');
var multer = require('multer');
const fileUploadPath = require('../config/config')
const router = express.Router();
var fs = require('fs');
var mkdirp = require('mkdirp');

const ocDocumentController = require('../app/api/controllers/ocDocument');
// var month_name = function(dt){
//   mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
//     return mlist[dt.getMonth()];
//   };
var storage = multer.diskStorage({
  
    destination: (req, file, cb) => {
      
      var dateObj = new Date();
      let mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

      let Yearr = dateObj.getUTCFullYear();
      let monthName =  dateObj.getMonth() ;  
      monthName = mlist[monthName];
      let dateName = dateObj.getDate();

      var dir = "./" + fileUploadPath.fileUploadPath + "/" + Yearr + "/" + monthName + "/" + dateName;
      // console.log(dir)
      mkdirp(dir, function(err) { 
        cb(null, dir)
        // path exists unless there was an error

    });
    },
    

    filename: (req, file, cb) => {

      cb(null, file.originalname + '-' + Date.now())
    }
 });
 var upload = multer({storage: storage});

router.post('/save',upload.single('file'), ocDocumentController.save);
/**
        * @api {post} ocDocument/save upload Document (**formData)
        * @apiVersion 0.0.1
        * @apiGroup OC Document
        *
        * @apiParam {String} ocid reference of OC .(OC ID should be pass as a formData - required)
        * @apiParam {String} documentname name of uploaded file .(document name should be pass as a formData parameter - required)
        * @apiParam {String} uploadedby id of uploaded person .(uploaded by should be pass as a formData parameter - required)
        * @apiParam {Date} uploadeddate uploaded Date.(uploaded Date should be pass as a formData parameter - required)
        * @apiParam {String} filePath  of uploaded file.(filePath should be pass as a formData parameter - required)
        *
        * @apiSuccessExample {json} Success-Response:
        *{
        "status": "success",
        "message": "Document uploaded successfully!!!",
        "data": null
        *}
        *
        @apiErrorExample {json} Error-Response:
        *
        * {
        "status": "error",
        "message": "something looks wrong!!!!!!",
        "data": err
        }
        */
router.post('/getByOCID', ocDocumentController.getByOCID);
/**
        * @api {post} ocDocument/getByOCID get document list by OC ID
        * @apiVersion 0.0.1
        * @apiGroup OC Document
        *
        * @apiParam {String} ocid OC ID to fetch Documents .(OC ID should be pass as a body parameter - required)
         * @apiSuccessExample {json} Success-Response:
        *{
        "status": "success",
        "message": "Documents Fetched Successfully!!!",
        "data": {
            "ocDocuments": [{
                "_id": "string",
                "ocid": "string",
                "documentname":"String",
                "uplaodedby":"String",
                "uploadeddate":"Date",
                "dochash":"String"
                "__v": "number"
                },
            }]
        *}
        *}
        *
        @apiErrorExample {json} Error-Response:
        *
        * {
        "status": "error",
        "message": "Invalid OC Number",
        "data": null
        }
        */
module.exports = router;