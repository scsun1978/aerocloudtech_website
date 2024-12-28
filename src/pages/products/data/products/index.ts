import { trafficProducts } from './trafficProducts';
import { mediaProducts } from './mediaProducts';
import { serviceProducts } from './serviceProducts';
import { analyticsProducts } from './analyticsProducts';
import { monitoringProducts } from './monitoringProducts';
import { middlewareProducts } from './middlewareProducts';
import type { Product } from '../../types';

// Merge all products
export const products: Product[] = [
  ...trafficProducts,
  ...mediaProducts,
  ...serviceProducts,
  ...analyticsProducts,
  ...monitoringProducts,
  ...middlewareProducts
];