import express from 'express';
import { test } from '../controllers/user.js';

const userRouter = express.Router();

userRouter.get('/test', test) 

export { userRouter }