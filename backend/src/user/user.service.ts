import { emailServices } from '@common/services';
import { tokenService } from 'src/token';
import { UserDto } from 'src/user/dto/userDto';
import { userModel } from 'src/user/user.model';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { HTTPError } from 'src/errors/httpError.class';

export class UserService {
  logout = async (refreshToken?: string) => {
    if (!refreshToken) {
      throw HTTPError.badRequest('refreshToken в cookies  не найден');
    }

    const result = await tokenService.removeToken(refreshToken);

    if (!result) {
      throw HTTPError.badRequest('refreshToken в cookies  не найден');
    }

    return result;
  };

  login = async (email: string, password: string) => {
    const existedUser = await userModel.findOne({ email });
    if (!existedUser) {
      throw HTTPError.badRequest('Пользователь c таким email не найден');
    }
    const isCorrectPassword = await bcrypt.compare(password, existedUser.password);

    if (!isCorrectPassword) {
      throw HTTPError.badRequest('Неверный пароль');
    }

    const userDto = new UserDto({
      _id: String(existedUser._id),
      email: existedUser.email,
      isActivate: existedUser.isActivate,
    });

    const token = tokenService.generateTokens(userDto);

    await tokenService.saveToken(userDto.id, token.refreshToken);

    return { token, user: userDto };
  };

  createUser = async (email: string, password: string) => {
    const existedUser = await userModel.findOne({ email: email });

    if (existedUser) {
      throw HTTPError.badRequest('Пользователь c таким email уже существует');
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const activateLink = uuidv4();

    const user = await userModel.create({
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
    const user = await userModel.findOneAndUpdate(
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
      throw HTTPError.badRequest('Пользователя с данной ссылкой активации не обнаружен');
    }

    const userDto = new UserDto({ _id: String(user._id), email: user.email, isActivate: user.isActivate });

    return userDto;
  };
}
