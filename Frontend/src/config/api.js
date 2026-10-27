/**
 * GLIIMMER Boutique API Configuration
 * Reads VITE_API_URL configured via .env or Vercel dashboard.
 */
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  products: `${API_BASE_URL}/products`,
  customStudioShades: `${API_BASE_URL}/custom-studio/shades`,
  customStudioCalculate: `${API_BASE_URL}/custom-studio/calculate`,
  customStudioSaveBox: `${API_BASE_URL}/custom-studio/save-box`,
  orders: `${API_BASE_URL}/orders`,
  newsletter: `${API_BASE_URL}/newsletter/subscribe`,
  reviews: `${API_BASE_URL}/reviews`,
  contact: `${API_BASE_URL}/contact`,
  health: `${API_BASE_URL}/health`
};
