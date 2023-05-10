import { emailServices } from '@common/services/email';
import { tokenService } from 'src/token';
import { UserDto } from 'src/user/dto/userDto';
import { User } from 'src/user/user.model';

export class UserService {
  createUser = async (email: string, password: string) => {
    const existedUser = await User.findOne({ email: email });

    if (existedUser) {
      return null;
    }

    const user = await User.create({
      email: email,
      password: password,
      isActivate: false,
    });

    await emailServices.sendActivateLink(email, 'test-link-activate');

    const userDto = new UserDto({ _id: String(user._id), email: user.email, isActivate: user.isActivate });

    const token = tokenService.generateTokens(userDto);

    await tokenService.saveToken(userDto.id, token.refreshToken);

    return { token, user: userDto };
  };
}
