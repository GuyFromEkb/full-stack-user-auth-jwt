import { configService } from '@config/config.service';
import jwt from 'jsonwebtoken';
import { tokenModel } from 'src/token';
import { UserDto } from 'src/user/dto/userDto';

class TokenService {
  generateTokens = (payload: UserDto) => {
    const userObj = { ...payload };

    const accessToken = jwt.sign(userObj, configService.env.JWT_ACCESS_SECRET, { expiresIn: '30m' });
    const refreshToken = jwt.sign(userObj, configService.env.JWT_REFRESH_SECRET, { expiresIn: '1d' });

    return { accessToken, refreshToken };
  };

  saveToken = async (userId: string, refreshToken: string) => {
    const tokenData = await tokenModel.findOne({ userId });

    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }

    return tokenModel.create({ userId, refreshToken });
  };

  removeToken = async (refreshToken: string) => {
    const tokenData = await tokenModel.findOneAndRemove({ refreshToken });
    return tokenData;
  };
}

export const tokenService = new TokenService();
