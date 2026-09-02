import { Router } from 'express';
import { caseStudyController } from '../controllers/caseStudyController.js';

const router = Router();

router.get('/', caseStudyController.getCaseStudies);
router.get('/:slug', caseStudyController.getCaseStudyBySlug);

export default router;
