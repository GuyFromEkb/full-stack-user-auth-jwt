import { IUser } from 'src/user/types';

type dtoModel = Pick<IUser, 'isActivate' | 'email'> & { _id: string };

export class UserDto {
  email;
  id;
  isActivated;

  constructor(model: dtoModel) {
    this.email = model.email;
    this.id = model._id;
    this.isActivated = model.isActivate;
  }
}
