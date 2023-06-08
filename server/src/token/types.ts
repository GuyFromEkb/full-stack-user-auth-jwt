import { ObjectId } from 'mongoose';

export interface ITokenModel {
  userId: ObjectId;
  refreshToken: string;
}
