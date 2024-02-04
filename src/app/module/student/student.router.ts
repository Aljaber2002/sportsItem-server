import express from 'express';
import {
  controllStudent,
  deleteSingleStudent,
  getAllstudent,
  getSinglestudent,
} from './student.controller';
export const studentrouter = express.Router();
studentrouter.post('/creat-user', controllStudent);
studentrouter.get('/get-students', getAllstudent);
studentrouter.get('/single-student/:id', getSinglestudent);
studentrouter.delete('/delete-student/:id', deleteSingleStudent);
