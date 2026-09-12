import express from 'express';

import { systemPlanController } from '../controllers/systemPlanController.js';
import { validateSystemPlanPayload } from '../middleware/validator.js';
import { submissionLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.post(
  '/',
  submissionLimiter,
  validateSystemPlanPayload,
  systemPlanController.createSystemPlan
);

router.get(
  '/:blueprintId',
  systemPlanController.getSystemPlanById
);

export default router;