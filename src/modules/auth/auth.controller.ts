import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthDto } from './dtos/auth.dto';
import { SignUpDto } from './dtos/signUp.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('loginApp')
  async loginApp(@Body() authDto: AuthDto) {
    return await this.authService.logIn(authDto.email, authDto.password, 'app');
  }

  @Post('loginAdmin')
  async loginAdmin(@Body() authDto: AuthDto) {
    return await this.authService.logIn(
      authDto.email,
      authDto.password,
      'admin-panel',
    );
  }

  @Post('signUp')
  async signUp(@Body() signUpDto: SignUpDto) {
    return await this.authService.signUp(
      signUpDto.username,
      signUpDto.email,
      signUpDto.dni,
      signUpDto.password,
    );
  }
}
