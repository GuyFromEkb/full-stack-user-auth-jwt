import { emailServices } from '@common/services';
import { tokenService } from 'src/token';
import { UserDto } from 'src/user/dto/userDto';
import { User } from 'src/user/user.model';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

export class UserService {
  createUser = async (email: string, password: string) => {
    const existedUser = await User.findOne({ email: email });

    if (existedUser) {
      throw new Error('Пользователь уже существует');
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const activateLink = uuidv4();

    const user = await User.create({
      email: email,
      password: hashPassword,
      isActivate: false,
      activateLink,
    });

    await emailServices.sendActivateLink(email, activateLink);

    const userDto = new UserDto({ _id: String(user._id), email: user.email, isActivate: user.isActivate });

    const token = tokenService.generateTokens(userDto);

    await tokenService.saveToken(userDto.id, token.refreshToken);

    return { token, user: userDto };
  };

  activateUser = async (activateLink: string) => {
    const user = await User.findOneAndUpdate(
      { activateLink },
      {
        isActivate: true,
        $unset: {
          activateLink,
        },
      },
      {
        new: true,
      }
    );

    if (!user) {
      throw new Error('Пользователя с данной ссылкой активации не обнаружен');
    }

    const userDto = new UserDto({ _id: String(user._id), email: user.email, isActivate: user.isActivate });

    return userDto;
  };
}
