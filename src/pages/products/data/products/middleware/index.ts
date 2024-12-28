import { dataIntegrationProducts } from './dataIntegration';
import { authProducts } from './auth';
import { apiGatewayProducts } from './apiGateway';
import { cachingProducts } from './caching';
import { loggingProducts } from './logging';
import { workflowProducts } from './workflow';
import { storageProducts } from './storage';

export const middlewareProducts = [
  ...dataIntegrationProducts,
  ...authProducts,
  ...apiGatewayProducts,
  ...cachingProducts,
  ...loggingProducts,
  ...workflowProducts,
  ...storageProducts
];