import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  async getTransactions() {
    return {
      status: 'up',
      code: 200,
    };
  }
}
