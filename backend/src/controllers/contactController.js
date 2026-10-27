import { storage } from '../models/storage.js';
import crypto from 'crypto';

export const submitInquiry = async (req, res, next) => {
  try {
    const { name, email, subject, message, inquiryType } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required.'
      });
    }

    const inquiry = {
      id: `inq-${crypto.randomUUID()}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject || 'General Atelier Inquiry',
      inquiryType: inquiryType || 'Boutique Consultation',
      message: message.trim(),
      status: 'new',
      receivedAt: new Date().toISOString()
    };

    await storage.insert('inquiries', inquiry);

    res.status(201).json({
      success: true,
      message: 'Thank you for contacting GLIIMMER Concierge. Our salon director will be in touch within 24 hours.',
      data: inquiry
    });
  } catch (error) {
    next(error);
  }
};

export const getInquiries = async (req, res, next) => {
  try {
    const inquiries = await storage.getCollection('inquiries');
    res.json({
      success: true,
      count: inquiries.length,
      data: inquiries
    });
  } catch (error) {
    next(error);
  }
};
