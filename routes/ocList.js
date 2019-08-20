const express = require('express');
const router = express.Router();
const ocListController = require('../app/api/controllers/ocList');


router.post('/getOCArchieves', ocListController.getClosedOCs);
/**
        * @api {post} ocList/getOCArchieves get Closed OC List
        * @apiVersion 0.0.1
        * @apiGroup OC List
        *
        * @apiParam {String} roleName to get OC List. (Should pass as a body parameter.- required)
        * @apiParam {String} branchId for branch group user. (Should pass as a body parameter. - optional)
        * @apiParam {String} Priority for Oc List. (Should pass as a body parameter. - optional)
        
        * @apiSuccessExample {json} Success-Response:
        *{
        "status": "success",
        "message": "OC List Found!!!",
        "data": {
                "_id": "String",
                "OCNumber": "Number",
                "SubAssemblyIDs": [
                    {
                        "_id": "String",
                        "name": "String"
                    }
                ],
                "SpareIDs":[
                    {
                        "_id": "5d57f8bd4a56a74071c4824d",
                        "name": "testing1"
                    }
                ],
                "SerialNumbers":[
                    {
                        "name":"String",
                        "srno":"String"
                    }
                ],
                "OCDate" :"Date",
                "OCNotes":"String",
                "Priority":{
                    "_id":"String",
                    "name":"String"
                },
                "CustomerType":{
                    "_id":"String",
                    "name":"String"
                },
                "Customer":{
                    "_id":"String",
                    "name":"String",
                    "city":"String",
                    "contactNumber":"String"
                },
                "BranchID":{
                    "_id":"String",
                    "name":"String"
                },
                "ProductID":{
                    "_id":"String",
                    "name":"String"
                },
                "Status":{
                    "_id":"String",
                    "name":"String"
                },
                "CreatedBy":"String",
                "CreatedDate":"Date",
                "UpdatedBy":"String",
                "UpdatedDate":"Date",
                "__v": 0
            },
        *}
        *
        @apiErrorExample {json} Error-Response:
        *
        * {
        "status": "error",
        "message": "Not found",
        "data": null
        }
        */

router.post('/updateStatus', ocListController.updateStatus);
/**
        * @api {post} ocList/updateStatus update OC status
        * @apiVersion 0.0.1
        * @apiGroup OC List
        *
        * @apiParam {String} ocId Oc Id to update oc .(Oc ID should be pass as a body parameter - required )
        * @apiParam {String} userName Name of user.(User Name should be pass as a body parameter -required)       
        * @apiParam {String} roleName roleName should be pass as a body parameter-required.
        * @apiParam {String} status status of current OC. Status should be pass as a body parameter - required.
        * @apiParam {Boolean} installationComplete installation Complete should pass as a body parameter.
        * @apiParam {String} branchName branch Name  should pass as a body parameter.
        * 
        * @apiSuccessExample {json} Success-Response:
        *{
        "status": "success",
        "message": "OC Status Updated successfully!!!",
        "data": null
        *}
        *
        @apiErrorExample {json} Error-Response:
        *
        * {
        "status": "error",
        "message": "Invalid OC ID!",
        "data": null
        }
        */
router.post('/create', ocListController.create);
/**
        * @api {post} ocList/create create new oc List
        * @apiVersion 0.0.1
        * @apiGroup OC List
        *
        * @apiParam {String} OCNumber to create new OC .(Oc Number should be pass as a body parameter - required and unique)
        * @apiParam {Date} OCDate Oc Date should be pass as a body parameter.
        * @apiParam {String} OCNotes Oc Notes should be pass as a body parameter.
        * @apiParam {String} Priority Priority is an object(Possible Values:HIGH,MEDIUM,LOW).( Field -_id:String , name :String.) 
        * @apiParam {String} CustomerType Customer Type is an object(Possible Values:Customer,Corporate,Government).( Field -_id:String , name :String.)
        * @apiParam {String} Customer Customer is an object(Field - name : String , city : String,contactNumber:String).
        * @apiParam {String} BranchID branch Ids is an object ( Field -_id:String , name :String.)
        * @apiParam {String} ProductID product Ids is an object ( Field - _id:String ,name :String.)
        * @apiParam {String} SubAssemblyIDs branch Ids is an array of objects ( Field -_id:String , name :String.)
        * @apiParam {String} SpareIDs spare Ids is an object ( Field - _id:String ,name :String.)
        * @apiParam {String} Installation installtion is an object.(Field - InstallationDate:Date,installationComplete:boolean,invoiceDate:Date,InstallationTechnician:String,technicianContact:String,transport:String,invoiceNumber:String)
        * @apiParam {String} Status Status is an object ( Field - name :String.)
        * @apiParam {String} CreatedBy created by (person who created the list)
        * @apiParam {String} UpdatedBy updated by ( person name who updated the list)
        * @apiParam {Date} CreatedDate creation date
        * @apiParam {Date} UpdatedDate updated date
        * @apiParam {String} SerialNumbers serial numbers is an array of objects ( Field - ID:Number ,name : String, srno : String)
        * 
        * @apiSuccessExample {json} Success-Response:
        *{
        "status": "success",
        "message": "OC List created successfully!!!",
        "data": null
        *}
        *
        @apiErrorExample {json} Error-Response:
        *
        * {
        "status": "error",
        "message": "Oc List Already Exist!!",
        "data": null
        }
        */
router.post('/getByOCNumber', ocListController.getByOCNumber);
/**
        * @api {post} ocList/getByOCNumber get oc by OC Number
        * @apiVersion 0.0.1
        * @apiGroup OC List
        *
        * @apiParam {Number} OCNumber to get OC. (Should pass as a body parameter. - required)
        * @apiParam {String} roleName to get OC List. (Should pass as a body parameter. - required)
        * @apiSuccessExample {json} Success-Response:
        *{
        "status": "success",
        "message": "OC List Found!!!",
        "data": {
                "_id": "String",
                "OCNumber": "Number",
                "SubAssemblyIDs": [
                    {
                        "_id": "String",
                        "name": "String"
                    }
                ],
                "SpareIDs":[
                    {
                        "_id": "5d57f8bd4a56a74071c4824d",
                        "name": "testing1"
                    }
                ],
                "SerialNumbers":[
                    {
                        "name":"String",
                        "srno":"String"
                    }
                ],
                "OCDate" :"Date",
                "OCNotes":"String",
                "Priority":{
                    "_id":"String",
                    "name":"String"
                },
                "CustomerType":{
                    "_id":"String",
                    "name":"String"
                },
                "Customer":{
                    "_id":"String",
                    "name":"String",
                    "city":"String",
                    "contactNumber":"String"
                },
                "BranchID":{
                    "_id":"String",
                    "name":"String"
                },
                "ProductID":{
                    "_id":"String",
                    "name":"String"
                },
                "installation":{
                    "_id":"String",
                    "InstallationDate":Date",
                    "installationComplete":"String",
                    "invoiceDate":"Date",
                    "InstallationTechnician":"String",
                    "technicianContact":"String",
                    "transport":"String",
                    "invoiceNumber":"String"
                }
                "Status":{
                    "_id":"String",
                    "name":"String"
                },
                "CreatedBy":"String",
                "CreatedDate":"Date",
                "UpdatedBy":"String",
                "UpdatedDate":"Date",
                "__v": 0
            },
        *}
        *
        @apiErrorExample {json} Error-Response:
        *
        * {
        "status": "error",
        "message": "Not found",
        "data": null
        }
        */
router.post('/', ocListController.getByRoleName);
/**
        * @api {post} ocList/ get OC List
        * @apiVersion 0.0.1
        * @apiGroup OC List
        *
        * @apiParam {String} roleName to get OC List. (Should pass as a body parameter.- required)
        * @apiParam {String} Priority to filter OC List. (Should pass as a body parameter. - optional)
        * @apiParam {String} branchId for branch group user. (Should pass as a body parameter. - optional)
        * 
        * @apiSuccessExample {json} Success-Response:
        *{
        "status": "success",
        "message": "OC List Found!!!",
        "data": {
                "_id": "String",
                "OCNumber": "Number",
                "SubAssemblyIDs": [
                    {
                        "_id": "String",
                        "name": "String"
                    }
                ],
                "SpareIDs":[
                    {
                        "_id": "5d57f8bd4a56a74071c4824d",
                        "name": "testing1"
                    }
                ],
                "SerialNumbers":[
                    {
                        "name":"String",
                        "srno":"String"
                    }
                ],
                "OCDate" :"Date",
                "OCNotes":"String",
                "Priority":{
                    "_id":"String",
                    "name":"String"
                },
                "CustomerType":{
                    "_id":"String",
                    "name":"String"
                },
                "Customer":{
                    "_id":"String",
                    "name":"String",
                    "city":"String",
                    "contactNumber":"String"
                },
                "BranchID":{
                    "_id":"String",
                    "name":"String"
                },
                "ProductID":{
                    "_id":"String",
                    "name":"String"
                },
                "Status":{
                    "_id":"String",
                    "name":"String"
                },
                "CreatedBy":"String",
                "CreatedDate":"Date",
                "UpdatedBy":"String",
                "UpdatedDate":"Date",
                "__v": 0
            },
        *}
        *
        @apiErrorExample {json} Error-Response:
        *
        * {
        "status": "error",
        "message": "No OC List found",
        "data": null
        }
        */

router.post('/updateByOCId', ocListController.updateOC);
/**
        * @api {post} ocList/updateByOCId update oc List by OC ID
        * @apiVersion 0.0.1
        * @apiGroup OC List
        *
        * @apiParam {String} _id id to update OC. (Should pass as a Body parameter.-required)
        * @apiParam {String} roleName roleName of user.(Role Name should be pass as a body parameter -required)
        * @apiParam {String} userName Name of user.(User Name should be pass as a body parameter -required)
        * @apiParam {String} status Status of OC.(Satus should be pass as a body parameter -required)
        * @apiParam {Date} OCDate Oc Date should be pass as a body parameter.
        * @apiParam {String} OCNotes Oc Notes should be pass as a body parameter.
        * @apiParam {String} Priority Priority is an object(Possible Values:HIGH,MEDIUM,LOW). 
        * @apiParam {String} CustomerType Customer Type is an object(Possible Values:Customer,Corporate,Government).
        * @apiParam {String} Customer Customer is an object(Field - name : String , city : String,contactNumber:String).
        * @apiParam {String} BranchID branch Ids is an object ( Field - name :String.)
        * @apiParam {String} ProductID product Ids is an object ( Field - name :String.)
        * @apiParam {String} SubAssemblyIDs branch Ids is an array of objects ( Field - name :String.)
        * @apiParam {String} SpareIDs spare Ids is an object ( Field - name :String.)
        * @apiParam {String} Status Status is an object ( Field - name :String.)
        * @apiParam {String} CreatedBy created by (person who created the list)
        * @apiParam {String} UpdatedBy updated by ( person name who updated the list)
        * @apiParam {Date} CreatedDate creation date
        * @apiParam {Date} UpdatedDate updated date
        * @apiParam {String} SerialNumbers serial numbers is an array of objects ( Field - name : String, srno : String)
       
        * @apiSuccessExample {json} Success-Response:
        *{
        "status": "success",
        "message": "OC Updated Successfully!!!",
        "data": null
        *
        @apiErrorExample {json} Error-Response:
        *
        * {
        "status": "error",
        "message": "Not found",
        "data": null
        }
        */

module.exports = router;