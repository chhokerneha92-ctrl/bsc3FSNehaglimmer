import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, '../../data');

const INITIAL_PRODUCTS = [
  {
    id: "ruby-romance",
    name: "Ruby Romance",
    collection: "Signature Collection",
    category: "Simple / Glossy",
    price: 28.00,
    volume: "10 ml",
    wear: "7-Day Wear",
    finish: "Glossy",
    colorHex: "#8A1538",
    swatchGradient: "from-[#8A1538] to-[#4A0B1E]",
    description: "A hyper-pigmented, romantic crimson formulated with high-specular glass polymers for an enduring, salon-grade gel shine.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArfAyaiBuzWSuwfnEZ_bGuuULwAzJBjRb85iMT7Msa8KMnmLu-dFW-kHS1vNxdfeJgcpVRFQtnYmfvaXczpGA9EBa5EwAHZx8XG1uyVf6azIXZWqEsLS3127pAsSjRGWKerf_kw01gEAwOG4yvoGoYEXkhgcDvdzDdfftpY69e9dCJUyN0RcwCtYgede1i6Peb-VdnCtT0DxtqAjJPo_vL89Up0_tdfroQh-xiKQagqnMvKTekNEE",
    cardImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0vG90LAcA9dFYfWOGR_dffcRPZeBJ9dsfzOOF6_KgcRA8X9JTp-vaClDJAgH_pUdEy5awGzQ4_xJgkJ46Yl1k_HSe36F65EDvsN2QGgDqcH4tavgD4-neIg82Ncn-kRQQuIyZvzTj3IuO1uedmJwUSn80OmP_RETlvUvChey9qCfmDhrp8WOksUvDoblwY8T0-A7xaLgWtmHC5uotoNIebLp4Pvo6af02tbvSRYlO7h7FnGkbGlY",
    stock: 45,
    rating: 4.9,
    reviewCount: 38,
    isFeatured: true,
    shades: [
      { name: "Classic Red", hex: "#E32636" },
      { name: "Deep Wine", hex: "#722F37", active: true },
      { name: "Burgundy", hex: "#4A0E17" }
    ]
  },
  {
    id: "wine-night",
    name: "Wine Night",
    collection: "The Wine Collection",
    category: "Simple / Glossy",
    price: 28.00,
    volume: "10 ml",
    wear: "7-Day Wear",
    finish: "Glossy",
    colorHex: "#5C1028",
    swatchGradient: "from-[#5C1028] to-[#2E0814]",
    description: "A deep, moody burgundy with an opulent wet-lacquer sheen. Evokes late-night celebrations and candlelit dinners.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVUa785DjHRw9LdfP1NiM5V0-hO7nprDvI_1YUktFpyrAwiH0vq7ldmRMpEkyHn_0P_oNmO3-GseLcpdukFy5SxFanbvpmeKjuo0QJ2JZxQYmrjMXbuAkGan6PHY4gDfHO8myYhbfGm4FG0P5lvLnVHMUuxmyUMTVVyR7MFeMr7OjtwRm6uSjSXhJdr0j1pweV__yMKmvyC2s_8fB30R5MaNNxg4J8veaiX3L7e4psuplVQcot2nA",
    cardImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVUa785DjHRw9LdfP1NiM5V0-hO7nprDvI_1YUktFpyrAwiH0vq7ldmRMpEkyHn_0P_oNmO3-GseLcpdukFy5SxFanbvpmeKjuo0QJ2JZxQYmrjMXbuAkGan6PHY4gDfHO8myYhbfGm4FG0P5lvLnVHMUuxmyUMTVVyR7MFeMr7OjtwRm6uSjSXhJdr0j1pweV__yMKmvyC2s_8fB30R5MaNNxg4J8veaiX3L7e4psuplVQcot2nA",
    stock: 32,
    rating: 5.0,
    reviewCount: 52,
    isFeatured: true,
    shades: [
      { name: "Deep Wine", hex: "#5A1020", active: true },
      { name: "Ruby Red", hex: "#800020" },
      { name: "Black Cherry", hex: "#3B000E" }
    ]
  },
  {
    id: "velvet-crush",
    name: "Velvet Crush",
    collection: "Signature Collection",
    category: "Simple / Glossy",
    price: 24.00,
    volume: "10 ml",
    wear: "7-Day Wear",
    finish: "Glossy",
    colorHex: "#9E1B32",
    swatchGradient: "from-[#9E1B32] to-[#5C101D]",
    description: "A rich, velvety burgundy shade that delivers intense depth with effortless single-coat coverage.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgqeYUOx8euQPGSOHOdBd72Qt2cAKGoJWF3TiwJHWK6zqzDMwcFxPB0hNPPt9I1IjITAaTUwtgFO64DCoJRpt5Ke2RrRRcZjHiPDjM9_ri83qa4QymQLRfRaTkHJzIh42-nMJwKYLC-D-J1Hazv8EusCa4Llp-VurGyKCcqkjDIlBU0qtVoLZgvyROALtqUxD8vRmX-cCAL93I-r9fyfQW_dGjZNFaNmCjuJjFx0_ydBRPLlNlQ4s",
    cardImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgqeYUOx8euQPGSOHOdBd72Qt2cAKGoJWF3TiwJHWK6zqzDMwcFxPB0hNPPt9I1IjITAaTUwtgFO64DCoJRpt5Ke2RrRRcZjHiPDjM9_ri83qa4QymQLRfRaTkHJzIh42-nMJwKYLC-D-J1Hazv8EusCa4Llp-VurGyKCcqkjDIlBU0qtVoLZgvyROALtqUxD8vRmX-cCAL93I-r9fyfQW_dGjZNFaNmCjuJjFx0_ydBRPLlNlQ4s",
    stock: 28,
    rating: 4.8,
    reviewCount: 24,
    isFeatured: false,
    shades: [
      { name: "Velvet Red", hex: "#9E1B32", active: true },
      { name: "Garnet", hex: "#721A2B" }
    ]
  },
  {
    id: "garnet-glow",
    name: "Garnet Glow",
    collection: "The Wine Collection",
    category: "Glitter Collection",
    price: 26.00,
    volume: "10 ml",
    wear: "7-Day Wear",
    finish: "Glitter",
    colorHex: "#721A2B",
    swatchGradient: "from-[#721A2B] to-[#3B0E16]",
    description: "Infused with micro-faceted champagne shimmer suspended in a sultry ruby base.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0vG90LAcA9dFYfWOGR_dffcRPZeBJ9dsfzOOF6_KgcRA8X9JTp-vaClDJAgH_pUdEy5awGzQ4_xJgkJ46Yl1k_HSe36F65EDvsN2QGgDqcH4tavgD4-neIg82Ncn-kRQQuIyZvzTj3IuO1uedmJwUSn80OmP_RETlvUvChey9qCfmDhrp8WOksUvDoblwY8T0-A7xaLgWtmHC5uotoNIebLp4Pvo6af02tbvSRYlO7h7FnGkbGlY",
    cardImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0vG90LAcA9dFYfWOGR_dffcRPZeBJ9dsfzOOF6_KgcRA8X9JTp-vaClDJAgH_pUdEy5awGzQ4_xJgkJ46Yl1k_HSe36F65EDvsN2QGgDqcH4tavgD4-neIg82Ncn-kRQQuIyZvzTj3IuO1uedmJwUSn80OmP_RETlvUvChey9qCfmDhrp8WOksUvDoblwY8T0-A7xaLgWtmHC5uotoNIebLp4Pvo6af02tbvSRYlO7h7FnGkbGlY",
    stock: 19,
    rating: 4.9,
    reviewCount: 31,
    isFeatured: true,
    shades: [
      { name: "Garnet Glow", hex: "#721A2B", active: true }
    ]
  },
  {
    id: "midnight-wine",
    name: "Midnight Wine",
    collection: "The Wine Collection",
    category: "Glitter Collection",
    price: 26.00,
    volume: "10 ml",
    wear: "7-Day Wear",
    finish: "Glitter",
    colorHex: "#410F1F",
    swatchGradient: "from-[#410F1F] to-[#1A060C]",
    description: "Deepest black-cherry undertones with multidimensional gold and crimson starlight glints.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVUa785DjHRw9LdfP1NiM5V0-hO7nprDvI_1YUktFpyrAwiH0vq7ldmRMpEkyHn_0P_oNmO3-GseLcpdukFy5SxFanbvpmeKjuo0QJ2JZxQYmrjMXbuAkGan6PHY4gDfHO8myYhbfGm4FG0P5lvLnVHMUuxmyUMTVVyR7MFeMr7OjtwRm6uSjSXhJdr0j1pweV__yMKmvyC2s_8fB30R5MaNNxg4J8veaiX3L7e4psuplVQcot2nA",
    cardImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVUa785DjHRw9LdfP1NiM5V0-hO7nprDvI_1YUktFpyrAwiH0vq7ldmRMpEkyHn_0P_oNmO3-GseLcpdukFy5SxFanbvpmeKjuo0QJ2JZxQYmrjMXbuAkGan6PHY4gDfHO8myYhbfGm4FG0P5lvLnVHMUuxmyUMTVVyR7MFeMr7OjtwRm6uSjSXhJdr0j1pweV__yMKmvyC2s_8fB30R5MaNNxg4J8veaiX3L7e4psuplVQcot2nA",
    stock: 22,
    rating: 5.0,
    reviewCount: 42,
    isFeatured: false,
    shades: [
      { name: "Midnight Wine", hex: "#410F1F", active: true }
    ]
  }
];

const INITIAL_CUSTOM_SHADES = [
  { id: "red", name: "Classic Red", hex: "#c41e3a", undertone: "Cool Crimson", finish: "High Gloss" },
  { id: "wine", name: "Deep Wine", hex: "#5a1020", undertone: "Warm Burgundy", finish: "High Gloss" },
  { id: "burgundy", name: "Burgundy", hex: "#500010", undertone: "Noir Merlot", finish: "Velvet Cream" },
  { id: "champagne", name: "Champagne", hex: "#e6d5b8", undertone: "Soft Gold Shimmer", finish: "Micro Luster" }
];

const INITIAL_REVIEWS = [
  {
    id: "rev-1",
    productId: "ruby-romance",
    author: "Elena Rostova",
    location: "Paris, FR",
    rating: 5,
    title: "Couture in a Bottle",
    comment: "The gloss on Ruby Romance is peerless. It lasted 8 full days without a single edge chip. Worth every single cent.",
    createdAt: "2026-02-14T10:30:00Z",
    verified: true
  },
  {
    id: "rev-2",
    productId: "wine-night",
    author: "Camille Dupont",
    location: "New York, USA",
    rating: 5,
    title: "Absolute Perfection for Evenings",
    comment: "Wine Night is deep, moody, and has an unmistakable wet-lacquer shine. The custom cap engraving adds that bespoke touch.",
    createdAt: "2026-03-01T15:20:00Z",
    verified: true
  },
  {
    id: "rev-3",
    productId: "garnet-glow",
    author: "Sophia Sterling",
    location: "London, UK",
    rating: 5,
    title: "Mesmerizing Shimmer",
    comment: "The champagne micro-facets catch the candlelight so subtly. Not chunky glitter—pure elegance.",
    createdAt: "2026-03-10T12:00:00Z",
    verified: true
  }
];

class StorageEngine {
  constructor() {
    this.initialized = false;
  }

  async init() {
    if (this.initialized) return;
    try {
      await fs.mkdir(DATA_DIR, { recursive: true });

      await this._ensureFile('products.json', INITIAL_PRODUCTS);
      await this._ensureFile('customShades.json', INITIAL_CUSTOM_SHADES);
      await this._ensureFile('reviews.json', INITIAL_REVIEWS);
      await this._ensureFile('orders.json', []);
      await this._ensureFile('subscribers.json', []);
      await this._ensureFile('inquiries.json', []);
      await this._ensureFile('customBoxes.json', []);

      this.initialized = true;
    } catch (err) {
      console.error('Error initializing storage engine:', err);
      throw err;
    }
  }

  async _ensureFile(fileName, defaultData) {
    const filePath = path.join(DATA_DIR, fileName);
    try {
      await fs.access(filePath);
    } catch {
      await fs.writeFile(filePath, JSON.stringify(defaultData, null, 2), 'utf-8');
    }
  }

  async getCollection(collectionName) {
    await this.init();
    const filePath = path.join(DATA_DIR, `${collectionName}.json`);
    const content = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(content);
  }

  async saveCollection(collectionName, data) {
    await this.init();
    const filePath = path.join(DATA_DIR, `${collectionName}.json`);
    const tempPath = `${filePath}.tmp`;
    await fs.writeFile(tempPath, JSON.stringify(data, null, 2), 'utf-8');
    await fs.rename(tempPath, filePath);
    return data;
  }

  async find(collectionName, predicate) {
    const items = await this.getCollection(collectionName);
    return predicate ? items.filter(predicate) : items;
  }

  async findById(collectionName, id) {
    const items = await this.getCollection(collectionName);
    return items.find((item) => item.id === id) || null;
  }

  async insert(collectionName, item) {
    const items = await this.getCollection(collectionName);
    items.unshift(item);
    await this.saveCollection(collectionName, items);
    return item;
  }

  async update(collectionName, id, updates) {
    const items = await this.getCollection(collectionName);
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) return null;
    items[index] = { ...items[index], ...updates, updatedAt: new Date().toISOString() };
    await this.saveCollection(collectionName, items);
    return items[index];
  }

  async remove(collectionName, id) {
    const items = await this.getCollection(collectionName);
    const filtered = items.filter((item) => item.id !== id);
    if (filtered.length === items.length) return false;
    await this.saveCollection(collectionName, filtered);
    return true;
  }
}

export const storage = new StorageEngine();
