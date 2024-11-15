import express, { Router } from 'express'
import { todoController } from '../controllers/todos.js'

const router = Router()
router.post('/new-todo', (req,res) => todoController.createTodo(req,res))
router.get('/', (req,res) => todoController.getTodos(req,res))
router.patch('/:id', (req,res) => todoController.updateTodo(req,res))
router.delete('/:id', (req,res) => todoController.deleteTodo(req,res))

export default router