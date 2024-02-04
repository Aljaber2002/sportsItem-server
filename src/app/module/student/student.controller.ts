import { Request, Response } from 'express';
import {
  createStudentIndb,
  deleteSingleStudentFromdb,
  getAllstudentUser,
  getSingleStudentFromdb,
} from './student.service';
import studentValidationUsingJoi from './student.validationjoi';

export const controllStudent = async (req: Request, res: Response) => {
  try {
    const studentData = req.body.data;
    const { error } = studentValidationUsingJoi.validate(studentData);
    const result = await createStudentIndb(studentData);

    console.log(error);
    if (error) {
      res.status(400).json({
        success: false,
        message: 'joi error catch',
        Error: error.details,
      });
    }

    console.log(studentData);

    res.status(200).json({
      success: true,
      message: 'created student user successfully',
      result: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'something went wrong',
      Error: err,
    });
  }
};
export const getAllstudent = async (req: Request, res: Response) => {
  try {
    const result = await getAllstudentUser();
    res.send({
      success: true,
      message: 'get all student user successfully',
      result: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getSinglestudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.id;
    // console.log(studentId);
    const result = await getSingleStudentFromdb(studentId);
    res.status(200).send({
      success: true,
      message: 'get single student successfully',
      result: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'failed to get single student',
      Error: error,
    });
  }
};
export const deleteSingleStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.id;
    const result = await deleteSingleStudentFromdb(studentId);
    res.status(200).send({
      success: true,
      message: 'get single student successfully',
      result: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'failed to get single student',
      Error: error,
    });
  }
};
