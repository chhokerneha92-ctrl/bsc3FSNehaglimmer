import { storage } from '../models/storage.js';
import crypto from 'crypto';

export const subscribeNewsletter = async (req, res, next) => {
  try {
    const { email, firstName } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Please provide an email address.'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const existing = await storage.find('subscribers', (s) => s.email === normalizedEmail);

    if (existing.length > 0) {
      return res.json({
        success: true,
        message: 'You are already a member of the GLIIMMER Private Atelier Circle.',
        isExisting: true,
        promoCode: 'GLIIMMER10'
      });
    }

    const subscriber = {
      id: `sub-${crypto.randomUUID()}`,
      email: normalizedEmail,
      firstName: firstName ? firstName.trim() : null,
      vipTier: 'Connoisseur',
      promoCode: 'GLIIMMER10',
      subscribedAt: new Date().toISOString()
    };

    await storage.insert('subscribers', subscriber);

    res.status(201).json({
      success: true,
      message: '✨ Welcome to the GLIIMMER circle. Your invitation and 10% privilege code have been unlocked.',
      promoCode: 'GLIIMMER10',
      data: subscriber
    });
  } catch (error) {
    next(error);
  }
};

export const getSubscribers = async (req, res, next) => {
  try {
    const subscribers = await storage.getCollection('subscribers');
    res.json({
      success: true,
      count: subscribers.length,
      data: subscribers
    });
  } catch (error) {
    next(error);
  }
};
