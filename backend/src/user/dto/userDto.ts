import { configService } from '@config/config.service';
import { Id } from 'src/app/types';
import { IUser } from 'src/user/types';

type dtoModel = Pick<IUser, 'isActivate' | 'email' | 'activateLink'> & { _id: Id };

export class UserDto {
  email;
  id;
  isActivated;
  activateLink?;

  constructor(model: dtoModel) {
    this.email = model.email;
    this.id = model._id as string;
    this.isActivated = model.isActivate;
    this.activateLink = model.activateLink
      ? `${configService.env.SERVER_URL}/user/activate/${model.activateLink}`
      : undefined;
  }
}
