import { Schema, model } from 'mongoose';
import { Tuser } from './user.type';

export const userSchema = new Schema<Tuser>({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    min: [6, 'Must be at least 6, got {VALUE}'],
    max: 12,
  },
});

export const userModel = model<Tuser>('user', userSchema);
