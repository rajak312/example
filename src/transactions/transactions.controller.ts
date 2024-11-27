import { Controller, Get, Post } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('seed')
  async seedTransactions() {
    return this.transactionsService.seedTransactions();
  }

  @Get()
  async getTransactions() {
    return this.transactionsService.getTransactions();
  }
}
