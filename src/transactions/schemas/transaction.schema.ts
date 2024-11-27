import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransactionDocument = Transaction & Document;

@Schema()
export class Transaction {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  user_id: string;

  @Prop({ required: true })
  user_profile: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
