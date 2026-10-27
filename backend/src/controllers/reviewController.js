import { storage } from '../models/storage.js';
import crypto from 'crypto';

export const getReviews = async (req, res, next) => {
  try {
    const { productId } = req.query;
    let reviews = await storage.getCollection('reviews');

    if (productId) {
      reviews = reviews.filter((r) => r.productId === productId);
    }

    res.json({
      success: true,
      count: reviews.length,
      data: reviews
    });
  } catch (error) {
    next(error);
  }
};

export const createReview = async (req, res, next) => {
  try {
    const { productId, author, location, rating, title, comment, shade } = req.body;

    if (!productId || !author || !rating || !comment) {
      return res.status(400).json({
        success: false,
        message: 'Product ID, author, rating (1-5), and review comment are required.'
      });
    }

    const numericRating = Number(rating);
    if (numericRating < 1 || numericRating > 5) {
      return res.status(400).json({
        success: false,
        message: 'Rating must be between 1 and 5 stars.'
      });
    }

    const review = {
      id: `rev-${crypto.randomUUID()}`,
      productId,
      author: author.trim(),
      location: location || 'Verified Client',
      rating: numericRating,
      title: title || 'Exceptional Formulation',
      comment: comment.trim(),
      shade: shade || '',
      verified: true,
      createdAt: new Date().toISOString()
    };

    await storage.insert('reviews', review);

    // Update product rating summary
    const allProductReviews = await storage.find('reviews', (r) => r.productId === productId);
    const avgRating = (
      allProductReviews.reduce((sum, r) => sum + r.rating, 0) / allProductReviews.length
    ).toFixed(1);

    await storage.update('products', productId, {
      rating: Number(avgRating),
      reviewCount: allProductReviews.length
    });

    res.status(201).json({
      success: true,
      message: 'Review published successfully.',
      data: review
    });
  } catch (error) {
    next(error);
  }
};
