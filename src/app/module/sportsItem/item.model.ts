// const mongoose = require('mongoose');
import { Schema, model } from 'mongoose';
import { Tproduct } from './item.type';

// Define a Mongoose schema
const productSchema = new Schema<Tproduct>({
  name: {
    type: String,
    required: true,
  },
  price: { type: Number, required: true },

  quantity: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  size: {
    type: String,
  },
  color: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active', // You can specify a default value if you want
  },
});

// Create a Mongoose model
export const ProductModel = model<Tproduct>('Product', productSchema);
