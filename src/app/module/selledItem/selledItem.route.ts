import express from 'express';
import { SelledItemcontroller } from './selledItem.controller';
import { VerifyAuth } from '../../../midlleware/Auth';

export const sellRoute = express.Router();
sellRoute.post('/selled-item', VerifyAuth(), SelledItemcontroller.SelledItem);
sellRoute.get(
  '/sales-history',
  VerifyAuth(),
  SelledItemcontroller.selledItemcontroller,
);
