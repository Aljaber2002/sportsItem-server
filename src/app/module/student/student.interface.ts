export type userName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type guardianAddress = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  matherOccupation: string;
  motherContactNo: string;
};
export type localGuardianInfo = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type student = {
  id: string;
  password: string;
  name: userName;
  gender?: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?:
    | 'A+'
    | 'A-'
    | 'B+'
    | 'B-'
    | 'AB+'
    | 'A+'
    | 'A+'
    | 'AB-'
    | 'o+'
    | 'O-';
  presentAddress?: string;
  parmanentAddress?: string;
  guardian: guardianAddress;
  localGuardian: localGuardianInfo;
  isDelete: boolean;
  profileImage?: string;
};
