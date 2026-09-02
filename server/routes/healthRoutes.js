import { Router } from 'express';
import { healthController } from '../controllers/healthController.js';

const router = Router();

router.get('/health', healthController.getHealth);
router.get('/telemetry', healthController.getTelemetry);

export default router;
