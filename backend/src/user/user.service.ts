import { User } from 'src/user/user.model';

export class UserService {
  createUser = async (email: string, password: string) => {
    const existedUser = await User.findOne({ email: email });

    if (existedUser) {
      return null;
    }

    return User.create({
      email: email,
      password: password,
      isActivate: false,
    });
  };
}
