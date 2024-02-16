/* eslint-disable @typescript-eslint/no-explicit-any */
import { sportsItemService } from './item.service';
import { Request, Response } from 'express';
import { TitemOptionalPayload } from './item.type';

const product = async (req: Request, res: Response) => {
  try {
    const productPayload = req.body;

    // console.log(productPayload, 'test');

    const result = await sportsItemService.createProductIndb(productPayload);
    res.status(200).json({
      success: true,
      message: 'Added product successfullly',
      user: result, // Assuming 'result' contains the created user data
    });
  } catch (error: any) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: 'Failed to create product',
      error,
    });
  }
};
const getAllproducts = async (req: Request, res: Response) => {
  try {
    const productPayload = req.query as TitemOptionalPayload;
    // console.log(productPayload);

    // console.log(productPayload, 'test');

    const result =
      await sportsItemService.getProductsfromdbwithQuery(productPayload);
    res.status(200).json({
      success: true,
      message: 'retrive product successfullly',
      user: result, // Assuming 'result' contains the created user data
    });
  } catch (error: any) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch product',
      error,
    });
  }
};
const allproducts = async (req: Request, res: Response) => {
  try {
    const result = await sportsItemService.getAllproducts();
    res.status(200).json({
      success: true,
      message: 'retrive product successfullly',
      user: result, // Assuming 'result' contains the created user data
    });
  } catch (error: any) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch product',
      error,
    });
  }
};
const updateStatusController = async (req: Request, res: Response) => {
  try {
    const payload = req?.query?.id as string;
    // console.log(payload);

    const result = await sportsItemService.updateStatusIndb(payload);
    res.status(200).json({
      success: true,
      message: 'updated status successfully successfullly',
      user: result, // Assuming 'result' contains the created user data
    });
  } catch (error: any) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete product',
      error,
    });
  }
};
const deleteItems = async (req: Request, res: Response) => {
  try {
    // console.log(payload);

    const result = await sportsItemService.deleteSportsItemfromdb();
    res.status(200).json({
      success: true,
      message: 'deleted Items successfullly',
      user: result, // Assuming 'result' contains the created user data
    });
  } catch (error: any) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: 'Failed to process delete',
      error,
    });
  }
};
const updateProductCOntroller = async (req: Request, res: Response) => {
  try {
    const productPayload = req.body;
    // console.log(productPayload);

    // console.log(productPayload, 'test');

    const result = await sportsItemService.updateProductIntodb(productPayload);
    res.status(200).json({
      success: true,
      message: 'update product successfullly',
      user: result, // Assuming 'result' contains the created user data
    });
  } catch (error: any) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: 'Failed to update the product',
      error,
    });
  }
};
const filterDoc = async (req: Request, res: Response) => {
  try {
    const productquery = req.query;
    // console.log(productquery);
    // console.log(productPayload);

    // console.log(productPayload, 'test');

    const result = await sportsItemService.filterDocBYsearch(productquery);
    res.status(200).json({
      success: true,
      message: 'retrive search product successfully',
      user: result, // Assuming 'result' contains the created user data
    });
  } catch (error: any) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: error?.message,
      error,
    });
  }
};

export const productController = {
  product,
  getAllproducts,
  updateStatusController,
  allproducts,
  deleteItems,
  updateProductCOntroller,
  filterDoc,
};
