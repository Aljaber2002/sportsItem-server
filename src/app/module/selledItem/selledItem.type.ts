import { Date, Schema } from 'mongoose';

export type TselledItem = {
  buyerName: string;
  productId: Schema.Types.ObjectId;
  mainQuantity: number;
  dateOfsale?: Date;
};
