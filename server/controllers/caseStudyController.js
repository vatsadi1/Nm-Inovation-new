import { CaseStudy } from '../models/CaseStudy.js';
import { CASE_STUDIES as staticCaseStudies } from '../../src/data/caseStudies.js';
import { getDBStatus } from '../config/db.js';

export const caseStudyController = {
  /**
   * Get all case studies
   * GET /api/v1/case-studies
   */
  async getCaseStudies(req, res, next) {
    try {
      const { industry } = req.query;
      const dbStatus = getDBStatus();

      let items = [];
      if (dbStatus.connected) {
        const query = industry && industry !== 'All' ? { industry } : {};
        items = await CaseStudy.find(query);
        if (items.length === 0) {
          items = staticCaseStudies;
        }
      } else {
        items = industry && industry !== 'All'
          ? staticCaseStudies.filter((c) => c.industry === industry)
          : staticCaseStudies;
      }

      return res.status(200).json({
        success: true,
        count: items.length,
        data: items
      });
    } catch (err) {
      next(err);
    }
  },

  /**
   * Get case study by slug
   * GET /api/v1/case-studies/:slug
   */
  async getCaseStudyBySlug(req, res, next) {
    try {
      const { slug } = req.params;
      const dbStatus = getDBStatus();

      let study = null;
      if (dbStatus.connected) {
        study = await CaseStudy.findOne({ slug });
      }

      if (!study) {
        study = staticCaseStudies.find((c) => c.slug === slug);
      }

      if (!study) {
        return res.status(404).json({
          success: false,
          error: 'Case study blueprint not found.'
        });
      }

      return res.status(200).json({
        success: true,
        data: study
      });
    } catch (err) {
      next(err);
    }
  }
};
