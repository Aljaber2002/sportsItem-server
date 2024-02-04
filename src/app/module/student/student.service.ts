import { student } from './student.interface';
import { studentModel } from './student.model';

export const createStudentIndb = async (student: student) => {
  const result = await studentModel.create(student);
  // console.log(result);
  return result;
};
export const getAllstudentUser = async () => {
  const result = await studentModel.find();
  return result;
};
export const getSingleStudentFromdb = async (id: string) => {
  const result = await studentModel.findOne({ id: id });
  return result;
};
export const deleteSingleStudentFromdb = async (id: string) => {
  const result = await studentModel.updateOne(
    { id },
    { $set: { isDelete: true } },
  );
  return result;
};
