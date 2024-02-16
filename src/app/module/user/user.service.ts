import { userModel } from './user.model';
import { Tuser } from './user.type';

const createUserInDb = async (payload: Tuser) => {
  //   console.log(payload);
  const createUser = await userModel.create(payload);
  return createUser;
};

export const userService = {
  createUserInDb,
};
