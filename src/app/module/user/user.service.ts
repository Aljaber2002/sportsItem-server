import { userModel } from './user.model';
import { Tuser } from './user.type';

const createUserInDb = async (payload: Tuser) => {
  //   console.log(payload);
  const createUser = await userModel.create(payload);
  return createUser;
};
const getUserFromdb = async () => {
  const users = await userModel.find({}).exec();
  return users;
};

export const userService = {
  createUserInDb,
  getUserFromdb,
};
