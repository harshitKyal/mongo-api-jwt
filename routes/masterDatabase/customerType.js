const express = require('express');
const router = express.Router();
const customerTypeController = require('../../app/api/controllers/masterDatabase/customerType');
router.get('/', customerTypeController.getAll);
/**
        * @api {get} customerType/ get customerType list
        * @apiVersion 0.0.1
        * @apiGroup masterDatabase
        *
        * @apiSuccessExample {json} Success-Response:
        *{
        "status": "success",
        "message": "customerType list Fetched!!!",
        "data": {
                "customerTypeList":[
                        {
                                "_id":"string",
                                "name":"string"
                        }
                ]
        }
        *}
        *
        @apiErrorExample {json} Error-Response:
        *
        * {
        "status": "error",
        "message": "not found",
        "data": null
        }
        */

module.exports = router;