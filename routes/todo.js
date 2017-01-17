var express = require('express');
var router = express.Router();
var todo = require(__base + 'controllers/todo');

/* GET todo list. */
router.get('/list', todo.list);
router.get('/scaffold', todo.scaffold);

module.exports = router;
