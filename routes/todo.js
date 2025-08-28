const express = require('express');
const router = express.Router();

const { createTodo } = require('../controller/CreateTodo');
const Gettodo = require('../controller/Gettodo');
const GetTodo = require('../controller/GetTodoid');
const UpdateTodo = require('../controller/UpdateTodo');
const DeleteTodo = require('../controller/DeleteTodo');
const SignUP = require('../controller/Signup');


router.post('/todo', createTodo);
router.get('/Gettodo', Gettodo);
router.get('/Gettodoid/:id', GetTodo);
router.put('/Updatetodo/:id', UpdateTodo);
router.delete('/Deletetodo/:id', DeleteTodo);


router.post('/signup', SignUP);

module.exports = router;
