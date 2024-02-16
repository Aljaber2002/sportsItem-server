import { VerifyAuth } from './../../../midlleware/Auth';
import express from 'express';
import { productController } from './item.controller';
// import { VerifyAuth } from '../../../midlleware/Auth';

export const productRoute = express.Router();

productRoute.post(
  '/create-product',

  productController.product,
);
productRoute.get('/getProduct', VerifyAuth(), productController.getAllproducts);
productRoute.get('/total-list', productController.allproducts);
productRoute.patch(
  '/status',
  VerifyAuth(),
  productController.updateStatusController,
);
productRoute.delete('/delete', VerifyAuth(), productController.deleteItems);
productRoute.put(
  '/update-product',
  VerifyAuth(),
  productController.updateProductCOntroller,
);
productRoute.get('/search', productController.filterDoc);
