import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { User } from '../../user/model/user.entity';
import { UserService } from '../../user/user.service';
import { JwtPayload } from '../classes/jwt-playload.class';
import { jwtConstants } from '../constants/auth.constants';

@Injectable()
export class JwsStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const user = await this.userService.userRepository.findOne({
      where: { id: payload.id },
    });
    if (!user) {
      throw new UnauthorizedException(
        'Error no se encontro al usuario utilizando su token',
      );
    }

    return user;
  }
}
