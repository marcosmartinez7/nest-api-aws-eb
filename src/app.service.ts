import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Esi Data!!' + process.env.TEST_PROPERTY;
  }
}
