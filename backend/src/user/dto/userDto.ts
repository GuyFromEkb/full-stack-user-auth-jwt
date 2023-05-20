import { Id } from 'src/app/types';
import { IUser } from 'src/user/types';

type dtoModel = Pick<IUser, 'isActivate' | 'email'> & { _id: Id };

export class UserDto {
  email;
  id;
  isActivated;

  constructor(model: dtoModel) {
    this.email = model.email;
    this.id = model._id as string;
    this.isActivated = model.isActivate;
  }
}
