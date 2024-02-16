/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { AuthService } from './Auth.service';

export const userLogincontroller = async (req: Request, res: Response) => {
  try {
    const loginPayload = req.body;
    const result = await AuthService.userLogin(loginPayload);
    res.status(200).json({
      success: true,
      message: 'User Logged In  successfully',
      accesstoken: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Failed to create user',
      error: error.message,
    });
  }
};
