import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findOne(username: string): string {
    if (username === 'jerry') {
      return 'jerry is here';
    }
    return 'No one here';
  }
}
