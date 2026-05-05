const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController');

router.get('/', taskController.getTasks);
router.post('/', taskController.createTask);
router.patch('/:id/done', taskController.toggleTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;