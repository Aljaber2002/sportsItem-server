//
import { ProductModel } from '../sportsItem/item.model';
import { Salemodel } from './selledItem.model';
import { TselledItem } from './selledItem.type';
import { Tproduct } from '../sportsItem/item.type';

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
  console.log(payload);
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

export const getCategorizedSalesByYearly = async () => {
  const yearlySales: { [year: number]: number } = {};
  const products = await Salemodel.find({}).exec();

  products.forEach((sale: TselledItem) => {
    const originalDatetime = sale.dateOfsale as Date | undefined;
    const year: number = new Date(originalDatetime as Date).getFullYear();
    // console.log(year);

    if (!yearlySales[year]) {
      yearlySales[year] = sale.mainQuantity;
    } else {
      yearlySales[year] += sale.mainQuantity;
    }
  });

  return yearlySales;
};
export const getCategorizedSalesByMonthly = async () => {
  const products = await Salemodel.find({}).exec();
  const monthlySales: { [yearMonth: string]: number } = {};

  products.forEach((sale) => {
    const originalDatetime = sale.dateOfsale as Date | undefined;
    const yearMonth: string = new Date(
      originalDatetime as Date,
    ).toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      timeZone: 'Asia/Dhaka',
    });

    if (!monthlySales[yearMonth]) {
      monthlySales[yearMonth] = sale.mainQuantity;
    } else {
      monthlySales[yearMonth] += sale.mainQuantity;
    }
  });

  return monthlySales;
};
function getISOWeekNumber(date: Date): number {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const diff = date.getTime() - startOfYear.getTime();
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  return Math.ceil(diff / oneWeek + 1);
}

export const getCategorizedSalesByWeekly = async () => {
  const weeklySales: { [yearWeek: string]: number } = {};
  const products = await Salemodel.find({}).exec();

  products.forEach((sale) => {
    const originalDatetime = sale.dateOfsale as Date | undefined;

    const saleDate: Date = new Date(originalDatetime as Date);
    const yearWeek: string =
      saleDate.getFullYear() + '-W' + getISOWeekNumber(saleDate);

    if (!weeklySales[yearWeek]) {
      weeklySales[yearWeek] = sale.mainQuantity;
    } else {
      weeklySales[yearWeek] += sale.mainQuantity;
    }
  });

  return weeklySales;
};
export const getCategorizedSalesByDaily = async () => {
  const products = await Salemodel.find({}).exec();
  const dailySales: { [date: string]: number } = {};

  products.forEach((sale) => {
    const originalDatetime = sale.dateOfsale as Date | undefined;
    const saleDate: string = new Date(originalDatetime as Date).toLocaleString(
      'en-US',
      {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'Asia/Dhaka',
      },
    );

    if (!dailySales[saleDate]) {
      dailySales[saleDate] = sale.mainQuantity;
    } else {
      dailySales[saleDate] += sale.mainQuantity;
    }
  });

  return dailySales;
};

export const selledItemService = {
  createSelledItemIntodb,
  getSalesHistory,
  //   getSalesHistory
};
