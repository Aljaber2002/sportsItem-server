import express from 'express';
import { userController } from './user.controller';

export const userRoute = express.Router();
userRoute.post('/create-user', userController.user);
userRoute.get('/alluser', userController.getUser);
