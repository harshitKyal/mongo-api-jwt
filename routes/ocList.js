const express = require('express');
const router = express.Router();
const ocListController = require('../app/api/controllers/ocList');
router.get('/', ocListController.getAll);
// router.post('/', ocListController.create);
// router.get('/:movieId', ocListController.getById);
// router.put('/:movieId', ocListController.updateById);
// router.delete('/:movieId', ocListController.deleteById);
module.exports = router;