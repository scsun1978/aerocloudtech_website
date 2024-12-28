import { trafficProducts } from './products/trafficProducts';
import { mediaProducts } from './products/mediaProducts';
import { serviceProducts } from './products/serviceProducts';
import { analyticsProducts } from './products/analyticsProducts';
import { monitoringProducts } from './products/monitoringProducts';
import { middlewareProducts } from './products/middlewareProducts';
import type { Product } from '../types';

// Merge all products
export const products: Product[] = [
  ...trafficProducts,
  ...mediaProducts,
  ...serviceProducts,
  ...analyticsProducts,
  ...monitoringProducts,
  ...middlewareProducts
];