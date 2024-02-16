import { userModel } from '../user/user.model';
import { Tlogin } from './Auth.type';
import jwt from 'jsonwebtoken';
// import crypto from 'crypto';
import config from '../../config';

const userLogin = async (payload: Tlogin) => {
  //   const secret = crypto.randomBytes(32).toString('hex');

  //   console.log('Generated secret:', secret);
  const { username, password } = payload;
  const isUserExist = await userModel.findOne({ username });
  // console.log(isUserExist);
  if (!isUserExist) {
    throw new Error('user not exist!!');
  }
  if (isUserExist.password !== password) {
    throw new Error('your password is incorrect');
  }
  const token = jwt.sign({ username }, config.accessToken as string, {
    expiresIn: config.expireToken,
  });
  return token;
};
export const AuthService = {
  userLogin,
};
