# GLIIMMER Haute Lacquer Boutique — REST API Backend

A luxury e-commerce backend built with **Node.js** and **Express**, featuring persistent storage, order fulfillment calculation, bespoke box atelier logic, VIP newsletter management, reviews, and client inquiries.

---

## 🚀 Quick Start

### 1. Navigate to the backend directory:
```bash
cd backend
```

### 2. Install dependencies (if not already installed):
```bash
npm install
```

### 3. Run development server (with hot reload):
```bash
npm run dev
# or
node --watch src/server.js
```

### 4. Run standard production server:
```bash
npm start
```

Default server runs at: `http://localhost:5000`

---

## 📡 API Endpoints Summary

### 💅 Products (`/api/products`)
| Method | Route | Description |
|---|---|---|
| `GET` | `/api/products` | Get all products with filters (`?category=glossy\|glitter`, `?search=ruby`) |
| `GET` | `/api/products/:id` | Get single product with shades & verified reviews |
| `POST` | `/api/products` | Create a new lacquer product |
| `PUT` | `/api/products/:id` | Update product details |
| `DELETE` | `/api/products/:id` | Delete product |

### ✨ Custom Studio Atelier (`/api/custom-studio`)
| Method | Route | Description |
|---|---|---|
| `GET` | `/api/custom-studio/shades` | List custom palette shades |
| `POST` | `/api/custom-studio/calculate` | Calculate tiered set price, savings, and velvet box packaging |
| `POST` | `/api/custom-studio/save-box` | Save bespoke curation with engraving message |
| `GET` | `/api/custom-studio/box/:boxId` | Retrieve saved custom box by ID |

### 🛍️ Orders & Checkout (`/api/orders`)
| Method | Route | Description |
|---|---|---|
| `POST` | `/api/orders` | Place order (validates items, complimentary shipping over $50, tax, generates `GLM-XXXX-XXXX` tracking number) |
| `GET` | `/api/orders` | List boutique orders |
| `GET` | `/api/orders/:id` | Track order by ID or tracking number |
| `PATCH` | `/api/orders/:id/status` | Update fulfillment status (`confirmed`, `in-atelier`, `shipped`, `delivered`) |

### 💌 VIP Newsletter (`/api/newsletter`)
| Method | Route | Description |
|---|---|---|
| `POST` | `/api/newsletter/subscribe` | Subscribe to private atelier circle & unlock privilege discount code |
| `GET` | `/api/newsletter/subscribers` | List VIP subscribers |

### ⭐ Reviews (`/api/reviews`)
| Method | Route | Description |
|---|---|---|
| `GET` | `/api/reviews` | List client reviews (`?productId=ruby-romance`) |
| `POST` | `/api/reviews` | Add verified review |

### 🛎️ Concierge Contact (`/api/contact`)
| Method | Route | Description |
|---|---|---|
| `POST` | `/api/contact` | Submit private salon consultation or bridal gifting inquiry |
| `GET` | `/api/contact` | View inquiries |
