/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import Jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import config from '../app/config';

export const VerifyAuth = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    // console.log(token);
    if (!token) {
      return res.status(401).json({
        success: 'false',
        message: 'sorry!you are not authorized',
      });
    }
    try {
      const decoded = await Jwt.verify(
        token as string,
        config.accessToken as string,
      );

      return next();
    } catch (err) {
      res.status(401).send({
        success: 'false',
        message: 'sorry!you are not authorized',
        error: err,
      });
    }
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // console.error(err.stack);
  res.status(500).send('Something broke!');
};
