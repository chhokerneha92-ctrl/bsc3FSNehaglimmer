import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from './config/config.js';
import { storage } from './models/storage.js';

import productRoutes from './routes/productRoutes.js';
import customStudioRoutes from './routes/customStudioRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import newsletterRoutes from './routes/newsletterRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';

const app = express();

// Middlewares
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Visual API Portal & Documentation
app.get(['/', '/api'], (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>GLIIMMER — Haute Lacquer Boutique API</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
      <style>
        :root {
          --primary: #5A1020;
          --secondary: #D4AF37;
          --bg: #FDFBF7;
          --surface: #FFFFFF;
          --text: #231F20;
          --muted: #6B6869;
          --border: #E8E2D9;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: var(--bg);
          color: var(--text);
          padding: 40px 20px;
          line-height: 1.6;
        }
        .container {
          max-width: 900px;
          margin: 0 auto;
        }
        header {
          text-align: center;
          margin-bottom: 40px;
          padding-bottom: 30px;
          border-bottom: 1px solid var(--border);
        }
        h1 {
          font-family: 'Playfair Display', serif;
          font-size: 38px;
          letter-spacing: 2px;
          color: var(--primary);
          margin-bottom: 8px;
        }
        .tagline {
          color: var(--secondary);
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 13px;
          font-weight: 600;
        }
        .badge {
          display: inline-block;
          background: #E8F5E9;
          color: #2E7D32;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 999px;
          margin-top: 14px;
        }
        .card {
          background: var(--surface);
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 24px;
          border: 1px solid var(--border);
          box-shadow: 0 4px 20px rgba(90, 16, 32, 0.04);
        }
        .card h2 {
          font-family: 'Playfair Display', serif;
          color: var(--primary);
          font-size: 20px;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        ul.routes {
          list-style: none;
        }
        li.route {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px dashed var(--border);
        }
        li.route:last-child { border-bottom: none; }
        .method {
          font-size: 11px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 4px;
          text-transform: uppercase;
          min-width: 55px;
          text-align: center;
        }
        .method.get { background: #E3F2FD; color: #1565C0; }
        .method.post { background: #E8F5E9; color: #2E7D32; }
        .method.put { background: #FFF3E0; color: #E65100; }
        .method.patch { background: #F3E5F5; color: #7B1FA2; }
        .method.delete { background: #FFEBEE; color: #C62828; }
        .path a {
          color: var(--primary);
          text-decoration: none;
          font-family: monospace;
          font-size: 13.5px;
          font-weight: 600;
        }
        .path a:hover { text-decoration: underline; }
        .desc {
          font-size: 13px;
          color: var(--muted);
          flex-grow: 1;
        }
        footer {
          text-align: center;
          margin-top: 40px;
          font-size: 12px;
          color: var(--muted);
          letter-spacing: 1px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <header>
          <div class="tagline">Haute Nail Lacquer Boutique</div>
          <h1>GLIIMMER REST API</h1>
          <p style="color: var(--muted); font-size: 14px; margin-top: 6px;">
            Full-stack bespoke backend engine for high-gloss formulations & atelier box customization.
          </p>
          <span class="badge">● Online & Ready • Node.js Express</span>
        </header>

        <div class="card">
          <h2>💅 Products Collection API</h2>
          <ul class="routes">
            <li class="route">
              <span class="method get">GET</span>
              <span class="path"><a href="/api/products" target="_blank">/api/products</a></span>
              <span class="desc">List all boutique lacquers (query: ?category=glossy|glitter, ?search=ruby)</span>
            </li>
            <li class="route">
              <span class="method get">GET</span>
              <span class="path"><a href="/api/products/ruby-romance" target="_blank">/api/products/:id</a></span>
              <span class="desc">Get product details, shades, and verified customer reviews</span>
            </li>
            <li class="route">
              <span class="method post">POST</span>
              <span class="path">/api/products</span>
              <span class="desc">Add new lacquer formulation with shades and specifications</span>
            </li>
          </ul>
        </div>

        <div class="card">
          <h2>✨ Bespoke Custom Studio API</h2>
          <ul class="routes">
            <li class="route">
              <span class="method get">GET</span>
              <span class="path"><a href="/api/custom-studio/shades" target="_blank">/api/custom-studio/shades</a></span>
              <span class="desc">Fetch available artisanal shades for custom gift box curations</span>
            </li>
            <li class="route">
              <span class="method post">POST</span>
              <span class="path">/api/custom-studio/calculate</span>
              <span class="desc">Calculate tiered price, savings, and custom velvet packaging</span>
            </li>
            <li class="route">
              <span class="method post">POST</span>
              <span class="path">/api/custom-studio/save-box</span>
              <span class="desc">Save customer bespoke box curation with engraved message</span>
            </li>
          </ul>
        </div>

        <div class="card">
          <h2>🛍️ Shopping Bag & Checkout API</h2>
          <ul class="routes">
            <li class="route">
              <span class="method get">GET</span>
              <span class="path"><a href="/api/orders" target="_blank">/api/orders</a></span>
              <span class="desc">List boutique orders (query: ?status=confirmed, ?email=...)</span>
            </li>
            <li class="route">
              <span class="method post">POST</span>
              <span class="path">/api/orders</span>
              <span class="desc">Create order: subtotal, complimentary courier over $50, tax, and tracking number</span>
            </li>
            <li class="route">
              <span class="method get">GET</span>
              <span class="path">/api/orders/:id</span>
              <span class="desc">Track order status by order ID or GLM- tracking number</span>
            </li>
          </ul>
        </div>

        <div class="card">
          <h2>💌 VIP Newsletter, Reviews & Concierge</h2>
          <ul class="routes">
            <li class="route">
              <span class="method post">POST</span>
              <span class="path">/api/newsletter/subscribe</span>
              <span class="desc">Subscribe to VIP list and receive 10% coupon code GLIIMMER10</span>
            </li>
            <li class="route">
              <span class="method get">GET</span>
              <span class="path"><a href="/api/reviews" target="_blank">/api/reviews</a></span>
              <span class="desc">Fetch verified client reviews & testimonials</span>
            </li>
            <li class="route">
              <span class="method post">POST</span>
              <span class="path">/api/reviews</span>
              <span class="desc">Submit a customer star review for a shade</span>
            </li>
            <li class="route">
              <span class="method post">POST</span>
              <span class="path">/api/contact</span>
              <span class="desc">Send concierge salon inquiry or bridal gifting request</span>
            </li>
            <li class="route">
              <span class="method get">GET</span>
              <span class="path"><a href="/api/health" target="_blank">/api/health</a></span>
              <span class="desc">System health, uptime, and server environment status</span>
            </li>
          </ul>
        </div>

        <footer>
          © 2026 GLIIMMER LUXE LACQUER • All Rights Reserved
        </footer>
      </div>
    </body>
    </html>
  `);
});

// Health endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    brand: config.brand.name,
    version: config.brand.version,
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    environment: config.nodeEnv
  });
});

// API Routes
app.use(`${config.apiPrefix}/products`, productRoutes);
app.use(`${config.apiPrefix}/custom-studio`, customStudioRoutes);
app.use(`${config.apiPrefix}/orders`, orderRoutes);
app.use(`${config.apiPrefix}/newsletter`, newsletterRoutes);
app.use(`${config.apiPrefix}/reviews`, reviewRoutes);
app.use(`${config.apiPrefix}/contact`, contactRoutes);

// Error Handling
app.use(notFoundHandler);
app.use(errorHandler);

// Start Server
const PORT = config.port;
storage.init().then(() => {
  app.listen(PORT, () => {
    console.log(`✨ GLIIMMER Luxury API Server running on port ${PORT}`);
    console.log(`📡 API Documentation: http://localhost:${PORT}/api`);
    console.log(`🌿 Health check: http://localhost:${PORT}/api/health`);
  });
}).catch((err) => {
  console.error('Failed to initialize storage engine:', err);
  process.exit(1);
});

export default app;
