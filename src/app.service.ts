import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Environment Variables -> TEST_PROPERTY: ' + ${process.env.TEST_PROPERTY}. DATABASE_URL: ${process.env.DATABASE_URL}`;
  }
}
