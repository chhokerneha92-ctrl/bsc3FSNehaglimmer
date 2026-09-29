import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
  apiPrefix: process.env.API_PREFIX || '/api',
  brand: {
    name: 'GLIIMMER',
    tagline: 'Haute Nail Lacquer Boutique & Bespoke Atelier',
    version: '1.0.0'
  }
};
