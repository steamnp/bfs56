import express from 'express'
import { createUser, getAllUsers } from '../controller/user.js'

export const userRouter = express.Router()

//http://localhost:4000/user/register
userRouter.post('/register', createUser)

//http://localhost:4000/user/all
userRouter.get('/all', getAllUsers)
