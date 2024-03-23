import * as bcrypt from 'bcrypt';
const SALT_ROUNDS = 10;

export class UtilsService {
  async encryptString(textToEncrypt: string) {
    return await bcrypt.hash(textToEncrypt, SALT_ROUNDS);
  }
}
