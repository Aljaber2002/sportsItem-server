/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProductModel } from './item.model';

export const GetPropertyAsArray = async (value: string) => {
  try {
    const getAllProducts = await ProductModel.find({}).exec();
    const productProperties = getAllProducts.map(
      (product: any) => product[value],
    );
    return productProperties;
  } catch (error) {
    console.error('Error occurred:', error);
    throw error; // You might want to handle or propagate the error appropriately
  }
};
