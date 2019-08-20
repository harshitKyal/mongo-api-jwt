const express = require('express');
var multer = require('multer');
const router = express.Router();
const ocDocumentController = require('../app/api/controllers/ocDocument');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'fileUploads')
    },
    filename: (req, file, cb) => {
      console.log(file)
      cb(null, file.originalname + '-' + Date.now())
    }
 });
 var upload = multer({storage: storage});

router.post('/save',upload.single('file'), ocDocumentController.save);
/**
        * @api {post} ocDocument/save upload Document
        * @apiVersion 0.0.1
        * @apiGroup OC Document
        *
        * @apiParam {String} ocid reference of OC .(OC ID should be pass as a body parameter - required)
        * @apiParam {String} documentname name of uploaded file .(document name should be pass as a body parameter - required)
        * @apiParam {String} uploadedby id of uploaded person .(uploaded by should be pass as a body parameter - required)
        * @apiParam {Date} uploadeddate uploaded Date.(uploaded Date should be pass as a body parameter - required)
        * @apiParam {String} dochash hash of uploaded file.(dochash should be pass as a body parameter - required)
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