import { Injectable } from '@nestjs/common';

// = can injectio
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
