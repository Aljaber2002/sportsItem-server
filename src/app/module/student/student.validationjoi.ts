import Joi from 'Joi';

// Define Joi validation schema for the guardian
const guardianSchema = Joi.object({
  fatherName: Joi.string().required().label('Father Name'),
  fatherOccupation: Joi.string().required().label('Father Occupation'),
  fatherContactNo: Joi.string().required().label('Father Contact Number'),
  motherName: Joi.string().required().label('Mother Name'),
  matherOccupation: Joi.string().required().label('Mother Occupation'),
  motherContactNo: Joi.string().required().label('Mother Contact Number'),
}).label('Guardian');

// Define Joi validation schema for the student
const studentValidationUsingJoi = Joi.object({
  id: Joi.string().label('User ID'),
  password: Joi.string().required(),
  name: Joi.object({
    firstName: Joi.string().required().trim().max(15).label('First Name'),
    middleName: Joi.string().required().trim().label('Middle Name'),
    lastName: Joi.string().required().trim().label('Last Name'),
  }).label('Name'),
  gender: Joi.string().valid('male', 'female').required().label('Gender'),
  dateOfBirth: Joi.string().label('Date of Birth'),
  email: Joi.string().email().required().label('Email'),
  contactNo: Joi.string().required().label('Contact Number'),
  emergencyContactNo: Joi.string().required().label('Emergency Contact Number'),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'o+', 'O-')
    .required()
    .label('Blood Group'),
  presentAddress: Joi.string().required().label('Present Address'),
  parmanentAddress: Joi.string().required().label('Permanent Address'),
  guardian: guardianSchema.required().label('Guardian Information'),
  localGuardian: Joi.object({
    name: Joi.string().required().label('Local Guardian Name'),
    occupation: Joi.string().required().label('Local Guardian Occupation'),
    contactNo: (value: string) =>
      Joi.assert(value, Joi.string(), 'put must be in string'),
    address: Joi.string().required().label('Local Guardian Address'),
  }).label('Local Guardian'),
  profileImage: Joi.string().label('Profile Image'),
}).label('Student');

export default studentValidationUsingJoi;
