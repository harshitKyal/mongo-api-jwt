const express = require('express');
const router = express.Router();
const subAssemblyController = require('../../app/api/controllers/masterDatabase/subAssembly');
router.get('/', subAssemblyController.getAll);
/**
        * @api {get} subAssembly/ get SubAssembly list
        * @apiVersion 0.0.1
        * @apiGroup masterDatabase
        *
        * @apiSuccessExample {json} Success-Response:
        *{
        "status": "success",
        "message": "SubAssembly list Fetched!!!",
        "data": {
                "subAssemblyList":[
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
//        router.post('/p', subAssemblyController.create);

module.exports = router;