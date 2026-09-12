import express from 'express';

import { auditController } from '../controllers/auditController.js';
import { validateAuditPayload } from '../middleware/validator.js';
import { submissionLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.post(
  '/',
  submissionLimiter,
  validateAuditPayload,
  auditController.submitAudit
);

router.get(
  '/stats',
  auditController.getAuditStats
);

export default router;