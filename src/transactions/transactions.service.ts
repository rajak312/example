import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction, TransactionDocument } from './schemas/transaction.schema';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name)
    private transactionModel: Model<TransactionDocument>,
  ) {}

  async createTransactions(
    transactions: Transaction[],
  ): Promise<Transaction[]> {
    return this.transactionModel.insertMany(transactions);
  }

  async getTransactions(): Promise<Transaction[]> {
    return this.transactionModel.find().exec();
  }

  async seedTransactions(): Promise<Transaction[]> {
    const filePath = path.join(process.cwd(), 'public', 'transactions.json');
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const transactions = JSON.parse(fileData);
    return this.createTransactions(transactions);
  }
}
