import express from 'express';
import { userController } from './user.controller';

export const userRoute = express.Router();
userRoute.post('/create-user', userController.user);
