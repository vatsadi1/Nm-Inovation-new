import express from 'express';

import { inquiryController } from '../controllers/inquiryController.js';
import { validateInquiryPayload } from '../middleware/validator.js';
import { submissionLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.post(
  '/',
  submissionLimiter,
  validateInquiryPayload,
  inquiryController.createInquiry
);

router.get(
  '/',
  inquiryController.getInquiries
);

export default router;