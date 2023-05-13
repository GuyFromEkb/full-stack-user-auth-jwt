import { Schema, model } from 'mongoose';

import { ITokenModel } from 'src/token';

const tokenSchema = new Schema<ITokenModel>({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  refreshToken: { type: String, required: true },
});

export const tokenModel = model<ITokenModel>('Token', tokenSchema);
