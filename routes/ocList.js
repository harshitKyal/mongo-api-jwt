const express = require('express');
const router = express.Router();
const ocListController = require('../app/api/controllers/ocList');
router.get('/', ocListController.getAll);
/**
        * @api {get} ocList/ get oc List
        * @apiVersion 0.0.1
        * @apiGroup OC List
        *
        * @apiSuccessExample {json} Success-Response:
        *{
        "status": "success",
        "message": "OC List Fetched!!!",
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
                "customer":{
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
router.post('/create', ocListController.create);
/**
        * @api {post} ocList/create create new oc List
        * @apiVersion 0.0.1
        * @apiGroup OC List
        *
        * @apiParam {String} OCNumber to create new OC .(Oc Number should be pass as a body parameter - required and unique)
        * @apiParam {Date} OCDate Oc Date should be pass as a body parameter.
        * @apiParam {String} OCNotes Oc Notes should be pass as a body parameter.
        * @apiParam {String} Priority Priority is an object(Possible Values:HIGH,MEDIUM,LOW). 
        * @apiParam {String} CustomerType Customer Type is an object(Possible Values:Customer,Corporate,Government).
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
router.get('/getByOCNumber', ocListController.getByOcNumber);
/**
        * @api {get} ocList/getByOcNumber get oc List by OC Number
        * @apiVersion 0.0.1
        * @apiGroup OC List
        *
        * @apiParam {Number} OCNumber to get OC List. (Should pass as a body parameter.)
        * @apiParam {String} roleName to get OC List. (Should pass as a body parameter.)
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
router.get('/getByRoleName', ocListController.getByRoleName);
/**
        * @api {get} ocList/getByRoleName get oc List by Role
        * @apiVersion 0.0.1
        * @apiGroup OC List
        *
        * @apiParam {String} roleName to get OC List. (Should pass as a body parameter.)
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

router.put('/:OCNumber', ocListController.updateOC);
/**
        * @api {put} ocList/:OCNumber update oc List by OC Number
        * @apiVersion 0.0.1
        * @apiGroup OC List
        *
        * @apiParam {Number} OCNumber to update OC List. (Should pass as a URL parameter.)
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