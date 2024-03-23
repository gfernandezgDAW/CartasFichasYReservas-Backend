import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async logIn(
    email: string,
    password: string,
    logInType: 'app' | 'admin-panel',
  ) {
    const user = await this.validateUserLogIn(email, password);

    if (logInType === 'admin-panel' && !user.isAdmin) {
      throw new UnauthorizedException(
        'No tienes permisos para acceder a esta sección',
      );
    }

    const payload = { id: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async validateUserLogIn(email: string, password: string) {
    const user = await this.userService.userRepository.findOne({
      where: { email },
    });

    console.log(user);

    if (!user) {
      throw new NotFoundException(`No existe usuario con correo ${email}`);
    }

    const checkPassword = bcrypt.compareSync(password, user.password);
    if (!checkPassword) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    return user;
  }

  async signUp(username: string, email: string, dni: string, password: string) {
    await this.userService.mailAlreadyExists(email);
    return await this.userService.create({ username, email, dni, password });
  }
}
