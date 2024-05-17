import { Request } from 'express';

import { User } from '../../modules/user/model/user.entity';

export interface RequestData extends Request {
  user?: User;
}
