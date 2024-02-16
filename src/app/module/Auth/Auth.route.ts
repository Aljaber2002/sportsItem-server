import Express from 'express';
import { userLogincontroller } from './Auth.controller';
export const authRoute = Express.Router();
authRoute.post('/login', userLogincontroller);
