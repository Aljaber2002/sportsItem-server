import { Schema, model } from 'mongoose';
import { guardianAddress, student } from './student.interface';
// import validator from 'validator';
import bcrypt from 'bcrypt';
import config from '../../config';

const guardianSchema = new Schema<guardianAddress>({
  fatherName: {
    type: String,
    required: [true, 'Father name is required'],
  },
  fatherOccupation: {
    type: String,
    required: [true, 'Father occupation is required'],
  },
  fatherContactNo: {
    type: String,
    required: [true, 'Father contact number is required'],
  },
  motherName: {
    type: String,
    required: [true, 'Mother name is required'],
  },
  matherOccupation: {
    type: String,
    required: [true, 'Mother occupation is required'],
  },
  motherContactNo: {
    type: String,
    required: [true, 'Mother contact number is required'],
  },
});

const studentSchema = new Schema<student>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  name: {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
      maxLength: [15, 'first name should not be max then 15'],
    },
    middleName: {
      type: String,
      required: [true, 'Middle name is required'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
    },
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: [true, 'Gender is required'],
  },
  dateOfBirth: String,
  email: {
    type: String,
    required: [true, 'Email is required'],
    // Add email validation logic if needed
  },
  contactNo: {
    type: String,
    required: [true, 'Contact number is required'],
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency contact number is required'],
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'A+', 'A+', 'AB-', 'o+', 'O-'],
    required: [true, 'Blood group is required'],
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required'],
  },
  parmanentAddress: {
    type: String,
    required: [true, 'Permanent address is required'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information is required'],
  },
  localGuardian: {
    name: { type: String, required: [true, 'Local guardian name is required'] },
    occupation: {
      type: String,
      required: [true, 'Local guardian occupation is required'],
    },
    contactNo: {
      type: String,
      required: [true, 'Local guardian contact number is required'],
    },
    address: {
      type: String,
      required: [true, 'Local guardian address is required'],
    },
  },

  profileImage: String,
  isDelete: {
    type: Boolean,
    default: false,
    required: true,
  },
});
// middleware before the insert student document
studentSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.salt_round));

  next();
});
studentSchema.post('save', async function (doc, next) {
  doc.password = '';
  next();
});

// using middleware pre method for find so that user cant see the doc which involved isDeleted:True
studentSchema.pre('find', function (next) {
  // console.log(this);
  this.where({ isDeleted: { $ne: true } });
  next();
});
// using middleware pre method for findOne so that user cant see the doc which involved isDeleted:True
studentSchema.pre('findOne', function (next) {
  // console.log(this);
  this.where({ isDelete: { $ne: true } });
  next();
});

// creating model-----
export const studentModel = model<student>('student', studentSchema);
