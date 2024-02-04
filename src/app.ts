import express, { Application, Request, Response } from 'express';
// import { studentrouter } from './app/module/student/student.router';
import cors from 'cors';
const app: Application = express();
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Assignment-5' });
});
// app.use('/api/v1/students', studentrouter);

export default app;
