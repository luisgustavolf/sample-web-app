import { Injectable } from '@nestjs/common';
import * as packageJson from 'package.json';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello Nest v${packageJson.version}`;
  }
}
