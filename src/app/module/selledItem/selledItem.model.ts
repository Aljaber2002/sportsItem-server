import { Schema, model } from 'mongoose';
import { TselledItem } from './selledItem.type';

// Define a Mongoose schema for Sale
export const saleSchema = new Schema<TselledItem>({
  productId: { type: Schema.Types.ObjectId, required: true, ref: 'Sale' },
  mainQuantity: { type: Number, required: true },
  buyerName: { type: String, required: true },

  dateOfsale: { type: Date, default: Date.now },
});
export const Salemodel = model<TselledItem>('Sale', saleSchema);
