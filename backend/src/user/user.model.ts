import { Schema, model } from 'mongoose';
import { IUser } from 'src/user/types';

const userSchema = new Schema<IUser>({
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  isActivate: { type: Boolean, required: true },
  activateLink: { type: String },
});

export const User = model<IUser>('User', userSchema);
