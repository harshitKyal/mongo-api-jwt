const express = require('express');
const router = express.Router();
const spareController = require('../../app/api/controllers/masterDatabase/spare');
router.get('/', spareController.getAll);
/**
        * @api {get} spare/ get spare list
        * @apiVersion 0.0.1
        * @apiGroup masterDatabase
        *
        * @apiSuccessExample {json} Success-Response:
        *{
        "status": "success",
        "message": "Spare list Fetched!!!",
        "data": {
                "spareList":[
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