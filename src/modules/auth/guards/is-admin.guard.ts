import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

import { UserService } from '../../user/user.service';

@Injectable()
export class IsAdminGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = await this.userService.userRepository.findOne({
      where: { id: request.id },
    });

    if (!user) {
      return false;
    }

    return user.isAdmin;
  }
}
