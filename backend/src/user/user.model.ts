import { Schema, model } from 'mongoose';
import m2s from 'mongoose-to-swagger';

import { idChangeMongoToSwagger } from 'src/swagger/utils';
import { IUser } from 'src/user/types';

const userSchema = new Schema<IUser>({
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  isActivate: { type: Boolean, required: true },
  activateLink: { type: String },
});

export const userModel = model<IUser>('User', userSchema);

export const swaggerUserSchema = {
  User: idChangeMongoToSwagger(m2s(userModel, { omitFields: ['_id', 'activateLink', 'password'] })),
};
