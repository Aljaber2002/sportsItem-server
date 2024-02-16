/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
// import { TselledItem } from "./selledItem.type";
import {
  //   getCategorizedSalesByDaily,
  //   getCategorizedSalesByMonthly,
  //   getCategorizedSalesByWeekly,
  //   getCategorizedSalesByYearly,
  selledItemService,
} from './selleditem.service';

const SelledItem = async (req: Request, res: Response) => {
  try {
    const productPayload = req.body;
    console.log(productPayload);

    // console.log(productPayload, 'test');

    const result =
      await selledItemService.createSelledItemIntodb(productPayload);
    console.log(result);
    res.status(200).json({
      success: true,
      message: 'successfully selled the item',
      user: result, // Assuming 'result' contains the created user data
    });
  } catch (error: any) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: 'Failed to  sell',
      error,
    });
  }
};
const selledItemcontroller = async (req: Request, res: Response) => {
  try {
    const productPayload = req.query as { interval: string };

    // console.log(productPayload, 'test');

    // const result = await getCategorizedSalesByYearly();
    // console.log('Yearly sales:', result);
    // const resilt1 = await getCategorizedSalesByMonthly();
    // console.log('monthly sales:', resilt1);
    // const result2 = await getCategorizedSalesByWeekly();
    // console.log('weekly', result2);
    // const result3 = await getCategorizedSalesByDaily();
    // console.log('daily', result3);
    const result = await selledItemService.getSalesHistory(productPayload);
    console.log(result);
    res.status(200).json({
      success: true,
      message: 'successfully selled the item',
      result: result, // Assuming 'result' contains the created user data
    });
  } catch (error: any) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: 'Failed to  sell',
      error,
    });
  }
};
export const SelledItemcontroller = {
  SelledItem,
  selledItemcontroller,
};
