import { Router } from 'express';
import { insightController } from '../controllers/insightController.js';

const router = Router();

router.get('/', insightController.getInsights);
router.get('/:slug', insightController.getInsightBySlug);

export default router;
