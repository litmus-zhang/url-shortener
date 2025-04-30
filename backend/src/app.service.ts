import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: "All system operational",
      status: HttpStatus.OK
    };
  }
}
