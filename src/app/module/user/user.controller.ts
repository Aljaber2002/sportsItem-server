/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { userService } from './user.service';

const user = async (req: Request, res: Response) => {
  try {
    const userPayload = req.body;
    const result = await userService.createUserInDb(userPayload);
    res.status(200).json({
      success: true,
      message: 'User created successfully',
      user: result, // Assuming 'result' contains the created user data
    });
  } catch (error: any) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: 'Failed to create user',
      error:
        error.code === 11000
          ? 'please provide unique username.This username is already used'
          : error.message,
    });
  }
};
const getUser = async (req: Request, res: Response) => {
  try {
    // const userPayload = req.body;
    const result = await userService.getUserFromdb();
    res.status(200).json({
      success: true,
      message: 'retrive user successfully',
      user: result, // Assuming 'result' contains the created user data
    });
  } catch (error: any) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch user',
      error: error,
    });
  }
};
export const userController = {
  user,
  getUser,
};
