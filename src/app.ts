import express, { Application, Request, Response } from 'express';

import cors from 'cors';
import { userRoute } from './app/module/user/user.route';
import { authRoute } from './app/module/Auth/Auth.route';
import { productRoute } from './app/module/sportsItem/item.route';
import { errorHandler } from './midlleware/Auth';
import { sellRoute } from './app/module/selledItem/selledItem.route';
const app: Application = express();
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Assignment-5' });
});
app.use('/sports-items', userRoute);
app.use('/sports-items', authRoute);
app.use('/sports-items', productRoute);
app.use('/sports-items', sellRoute);

app.use(errorHandler);
// app.use('/uploads', express.static('uploads'));

export default app;
