import { UserDto } from 'src/user/dto/userDto';
import { userModel } from 'src/user/user.model';

export class UsersService {
  getAllUsers = async () => {
    const users = await userModel.find();

    return users.map((user) => new UserDto(user));
  };
}
