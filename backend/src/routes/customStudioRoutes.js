import { Router } from 'express';
import {
  getCustomShades,
  calculateBespokeSet,
  saveBespokeBox,
  getBespokeBox
} from '../controllers/customStudioController.js';

const router = Router();

router.get('/shades', getCustomShades);
router.post('/calculate', calculateBespokeSet);
router.post('/save-box', saveBespokeBox);
router.get('/box/:boxId', getBespokeBox);

export default router;
