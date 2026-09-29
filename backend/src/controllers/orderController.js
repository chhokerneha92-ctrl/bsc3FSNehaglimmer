import { storage } from '../models/storage.js';
import crypto from 'crypto';

export const createOrder = async (req, res, next) => {
  try {
    const {
      customer = {},
      items = [],
      shippingAddress = {},
      paymentMethod = 'Credit Card / Apple Pay',
      giftMessage = ''
    } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Order must contain at least one item.'
      });
    }

    if (!customer.name || !customer.email) {
      return res.status(400).json({
        success: false,
        message: 'Customer name and valid email are required to process checkout.'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customer.email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    // Calculate subtotal
    const subtotal = items.reduce((acc, item) => {
      const price = Number(item.price) || 0;
      const qty = Number(item.quantity) || 1;
      return acc + (price * qty);
    }, 0);

    // Free luxury shipping over $50, otherwise $7.50
    const shipping = subtotal >= 50 ? 0.00 : 7.50;
    const tax = Math.round(subtotal * 0.08 * 100) / 100;
    const total = Math.round((subtotal + shipping + tax) * 100) / 100;

    const orderNumber = `GLM-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    const orderId = `ord-${crypto.randomUUID()}`;

    // Estimated delivery in 3 business days
    const estDelivery = new Date();
    estDelivery.setDate(estDelivery.getDate() + 4);

    const newOrder = {
      id: orderId,
      orderNumber,
      customer: {
        name: customer.name.trim(),
        email: customer.email.trim().toLowerCase(),
        phone: customer.phone || ''
      },
      shippingAddress: {
        street: shippingAddress.street || '123 Haute Avenue',
        city: shippingAddress.city || 'Beverly Hills',
        state: shippingAddress.state || 'CA',
        zipCode: shippingAddress.zipCode || '90210',
        country: shippingAddress.country || 'United States'
      },
      items: items.map((item) => ({
        id: item.id,
        productId: item.productId || item.id,
        name: item.name,
        shade: item.shade || 'Signature',
        colorHex: item.colorHex || '#8A1538',
        engraving: item.engraving || '',
        price: Number(item.price),
        quantity: Number(item.quantity) || 1,
        image: item.image || ''
      })),
      pricing: {
        subtotal: Math.round(subtotal * 100) / 100,
        shipping,
        shippingMethod: shipping === 0 ? 'Complimentary White-Glove Courier' : 'Standard Insured Courier',
        tax,
        total,
        currency: 'USD'
      },
      packaging: 'Signature Burgundy Lacquer Gift Box & Silk Ribbon',
      giftMessage: giftMessage || '',
      payment: {
        method: paymentMethod,
        status: 'PAID',
        transactionId: `TX-${crypto.randomBytes(4).toString('hex').toUpperCase()}`
      },
      status: 'confirmed',
      estimatedDeliveryDate: estDelivery.toISOString().split('T')[0],
      createdAt: new Date().toISOString()
    };

    await storage.insert('orders', newOrder);

    res.status(201).json({
      success: true,
      message: 'Your GLIIMMER luxury order has been confirmed and placed in queue.',
      data: newOrder
    });
  } catch (error) {
    next(error);
  }
};

export const getOrders = async (req, res, next) => {
  try {
    const { email, status } = req.query;
    let orders = await storage.getCollection('orders');

    if (email) {
      orders = orders.filter((o) => o.customer.email.toLowerCase() === email.toLowerCase());
    }

    if (status) {
      orders = orders.filter((o) => o.status.toLowerCase() === status.toLowerCase());
    }

    res.json({
      success: true,
      count: orders.length,
      data: orders
    });
  } catch (error) {
    next(error);
  }
};

export const getOrderById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const orders = await storage.getCollection('orders');
    const order = orders.find(
      (o) => o.id === id || o.orderNumber.toUpperCase() === id.toUpperCase()
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: `Order '${id}' not found.`
      });
    }

    res.json({
      success: true,
      data: order
    });
  } catch (error) {
    next(error);
  }
};

export const updateOrderStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ['pending', 'confirmed', 'in-atelier', 'shipped', 'delivered', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Valid options are: ${validStatuses.join(', ')}`
      });
    }

    const updated = await storage.update('orders', id, { status });

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: `Order '${id}' not found.`
      });
    }

    res.json({
      success: true,
      message: `Order status updated to '${status}'.`,
      data: updated
    });
  } catch (error) {
    next(error);
  }
};
