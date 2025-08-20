const express = require('express');
const router = express.Router();
const { createTodo } = require('../controller/CreateTodo');
const Gettodo = require('../controller/Gettodo');
const GetTodo = require('../controller/GetTodoid');
const UpdateTodo = require('../controller/UpdateTodo');

router.post('/todo', createTodo);
router.get('/Gettodo', Gettodo);
router.get('/Gettodoid/:id', GetTodo);
router.put('/Updatetodo/:id', UpdateTodo);

module.exports = router;