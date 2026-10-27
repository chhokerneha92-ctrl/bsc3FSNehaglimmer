import { Router } from 'express';
import { submitInquiry, getInquiries } from '../controllers/contactController.js';

const router = Router();

router.post('/', submitInquiry);
router.get('/', getInquiries);

export default router;
