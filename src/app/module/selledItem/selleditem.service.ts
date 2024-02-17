//
import { ProductModel } from '../sportsItem/item.model';
import { Salemodel } from './selledItem.model';
import { TselledItem } from './selledItem.type';
import { Tproduct } from '../sportsItem/item.type';
import {
  getCategorizedSalesByDaily,
  getCategorizedSalesByMonthly,
  getCategorizedSalesByWeekly,
  getCategorizedSalesByYearly,
} from './salehistory.utils';

const createSelledItemIntodb = async (payload: TselledItem) => {
  const targatedProduct = (await ProductModel.findById({
    _id: payload.productId,
  })) as Tproduct;
  //   console.log(targatedProduct);
  const value =
    parseInt(targatedProduct.quantity as string) - payload.mainQuantity;
  //   console.log(value);
  const updateProduct = await ProductModel.findByIdAndUpdate(
    { _id: payload.productId },
    { quantity: value },
  );
  console.log(updateProduct);
  //   console.log(payload);
  const selledItem = await Salemodel.create(payload);
  return selledItem;
};
const getSalesHistory = async (payload: { interval: string }) => {
  const { interval } = payload;
  // let categorizedSales = [];
  if (interval === 'yearly') {
    const yearlySales = await getCategorizedSalesByYearly();
    return yearlySales;
  }
  if (interval === 'monthly') {
    const monthlySales = await getCategorizedSalesByMonthly();
    return monthlySales;
  }
  if (interval === 'weekly') {
    const weeklySales = await getCategorizedSalesByWeekly();
    return weeklySales;
  }
  if (interval === 'daily') {
    const dailySales = await getCategorizedSalesByDaily();
    return dailySales;
  }
};
// const allselledProduct = async () => {

// //   return products;
// };

export const selledItemService = {
  createSelledItemIntodb,
  getSalesHistory,
  //   getSalesHistory
};
