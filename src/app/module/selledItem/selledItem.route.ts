import express from 'express';
import { SelledItemcontroller } from './selledItem.controller';

export const sellRoute = express.Router();
sellRoute.post('/selled-item', SelledItemcontroller.SelledItem);
sellRoute.get('/sales-history', SelledItemcontroller.selledItemcontroller);
