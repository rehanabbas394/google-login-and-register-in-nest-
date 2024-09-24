import { Injectable } from '@nestjs/common';
import { UsersService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async registerWithGoogle(user: any): Promise<any> {
    let existingUser = await this.usersService.findOneByEmail(user.email);

    if (!existingUser) {
      existingUser = await this.usersService.create({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        picture: user.picture,
      });
    }

    const payload = { email: existingUser.email, sub: existingUser.id };
    const accessToken = this.jwtService.sign(payload);

    return {
      ...existingUser,
      accessToken,
    };
  }
}
