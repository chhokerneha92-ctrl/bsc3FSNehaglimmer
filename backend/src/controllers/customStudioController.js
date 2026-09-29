import { storage } from '../models/storage.js';
import crypto from 'crypto';

const PRICE_TIERS = {
  1: { price: 28.00, regularPrice: 28.00, savings: 0 },
  2: { price: 48.00, regularPrice: 56.00, savings: 8.00 },
  3: { price: 64.00, regularPrice: 84.00, savings: 20.00 },
  4: { price: 78.00, regularPrice: 112.00, savings: 34.00 }
};

export const getCustomShades = async (req, res, next) => {
  try {
    const shades = await storage.getCollection('customShades');
    res.json({
      success: true,
      count: shades.length,
      data: shades
    });
  } catch (error) {
    next(error);
  }
};

export const calculateBespokeSet = async (req, res, next) => {
  try {
    const { selectedShadeIds = [], finish = 'High Gloss', message = '', comboName = '' } = req.body;

    if (!Array.isArray(selectedShadeIds) || selectedShadeIds.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Please select at least 1 shade for your bespoke box.'
      });
    }

    if (selectedShadeIds.length > 4) {
      return res.status(400).json({
        success: false,
        message: 'A maximum of 4 shades can be curated into a single GLIIMMER bespoke velvet box.'
      });
    }

    const allShades = await storage.getCollection('customShades');
    const matchedShades = selectedShadeIds.map((id) =>
      allShades.find((s) => s.id === id) || { id, name: id, hex: '#8A1538' }
    );

    const count = selectedShadeIds.length;
    const tier = PRICE_TIERS[count] || { price: count * 28.00, regularPrice: count * 28.00, savings: 0 };

    res.json({
      success: true,
      data: {
        shadeCount: count,
        shades: matchedShades,
        finish,
        comboName: comboName || `GLIIMMER Bespoke ${count}-Set`,
        engravingMessage: message ? message.slice(0, 24) : 'COMPLIMENTARY',
        packaging: 'Artisanal Burgundy Velvet Gift Box with Gold Foil Stamping',
        unitPrice: tier.price,
        regularPrice: tier.regularPrice,
        savings: tier.savings,
        currency: 'USD'
      }
    });
  } catch (error) {
    next(error);
  }
};

export const saveBespokeBox = async (req, res, next) => {
  try {
    const { selectedShades, finish, comboName, message } = req.body;

    if (!selectedShades || !selectedShades.length) {
      return res.status(400).json({
        success: false,
        message: 'Shades are required to save a bespoke box.'
      });
    }

    const boxId = `BOX-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;
    const newBox = {
      id: boxId,
      comboName: comboName || `Bespoke Curation #${boxId}`,
      selectedShades,
      finish: finish || 'High Gloss',
      message: message || '',
      createdAt: new Date().toISOString()
    };

    await storage.insert('customBoxes', newBox);

    res.status(201).json({
      success: true,
      message: 'Bespoke GLIIMMER box saved successfully.',
      data: newBox
    });
  } catch (error) {
    next(error);
  }
};

export const getBespokeBox = async (req, res, next) => {
  try {
    const { boxId } = req.params;
    const box = await storage.findById('customBoxes', boxId);

    if (!box) {
      return res.status(404).json({
        success: false,
        message: `Bespoke box '${boxId}' not found.`
      });
    }

    res.json({
      success: true,
      data: box
    });
  } catch (error) {
    next(error);
  }
};
