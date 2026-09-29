import { storage } from '../models/storage.js';

export const getProducts = async (req, res, next) => {
  try {
    const { category, collection, search, sort } = req.query;
    let products = await storage.getCollection('products');

    if (category && category !== 'all') {
      if (category.toLowerCase() === 'glossy') {
        products = products.filter((p) => p.category.toLowerCase().includes('glossy'));
      } else if (category.toLowerCase() === 'glitter') {
        products = products.filter((p) => p.category.toLowerCase().includes('glitter'));
      } else {
        products = products.filter((p) => p.category.toLowerCase().includes(category.toLowerCase()));
      }
    }

    if (collection) {
      products = products.filter((p) =>
        p.collection.toLowerCase().includes(collection.toLowerCase())
      );
    }

    if (search) {
      const q = search.toLowerCase();
      products = products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.finish.toLowerCase().includes(q)
      );
    }

    if (sort === 'price-asc') {
      products.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      products.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      products.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    res.json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await storage.findById('products', id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: `Product with ID '${id}' not found in the GLIIMMER boutique collection.`
      });
    }

    // Attach reviews if any
    const reviews = await storage.find('reviews', (r) => r.productId === id);

    res.json({
      success: true,
      data: {
        ...product,
        reviews
      }
    });
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const { name, collection, category, price, volume, finish, colorHex, swatchGradient, description, shades, image } = req.body;

    if (!name || !price || !finish || !colorHex) {
      return res.status(400).json({
        success: false,
        message: 'Name, price, finish, and colorHex are required fields.'
      });
    }

    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const existing = await storage.findById('products', id);
    if (existing) {
      return res.status(409).json({
        success: false,
        message: `A product with slug '${id}' already exists.`
      });
    }

    const newProduct = {
      id,
      name,
      collection: collection || 'Signature Collection',
      category: category || 'Simple / Glossy',
      price: Number(price),
      volume: volume || '10 ml',
      wear: '7-Day Wear',
      finish,
      colorHex,
      swatchGradient: swatchGradient || `from-[${colorHex}] to-[#000000]`,
      description: description || 'Haute couture salon lacquer.',
      image: image || 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVUa785DjHRw9LdfP1NiM5V0-hO7nprDvI_1YUktFpyrAwiH0vq7ldmRMpEkyHn_0P_oNmO3-GseLcpdukFy5SxFanbvpmeKjuo0QJ2JZxQYmrjMXbuAkGan6PHY4gDfHO8myYhbfGm4FG0P5lvLnVHMUuxmyUMTVVyR7MFeMr7OjtwRm6uSjSXhJdr0j1pweV__yMKmvyC2s_8fB30R5MaNNxg4J8veaiX3L7e4psuplVQcot2nA',
      cardImage: image || 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVUa785DjHRw9LdfP1NiM5V0-hO7nprDvI_1YUktFpyrAwiH0vq7ldmRMpEkyHn_0P_oNmO3-GseLcpdukFy5SxFanbvpmeKjuo0QJ2JZxQYmrjMXbuAkGan6PHY4gDfHO8myYhbfGm4FG0P5lvLnVHMUuxmyUMTVVyR7MFeMr7OjtwRm6uSjSXhJdr0j1pweV__yMKmvyC2s_8fB30R5MaNNxg4J8veaiX3L7e4psuplVQcot2nA',
      stock: 30,
      rating: 5.0,
      reviewCount: 0,
      isFeatured: false,
      shades: shades || [{ name, hex: colorHex, active: true }],
      createdAt: new Date().toISOString()
    };

    const saved = await storage.insert('products', newProduct);

    res.status(201).json({
      success: true,
      message: 'New GLIIMMER lacquer created successfully.',
      data: saved
    });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await storage.update('products', id, req.body);

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: `Product with ID '${id}' not found.`
      });
    }

    res.json({
      success: true,
      message: 'Product updated successfully.',
      data: updated
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await storage.remove('products', id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: `Product with ID '${id}' not found.`
      });
    }

    res.json({
      success: true,
      message: `Product '${id}' removed from boutique.`
    });
  } catch (error) {
    next(error);
  }
};
