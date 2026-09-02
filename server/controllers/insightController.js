import { Insight } from '../models/Insight.js';
import { INSIGHTS as staticInsights } from '../../src/data/insights.js';
import { getDBStatus } from '../config/db.js';

export const insightController = {
  /**
   * Get all insights
   * GET /api/v1/insights
   */
  async getInsights(req, res, next) {
    try {
      const { category } = req.query;
      const dbStatus = getDBStatus();

      let articles = [];
      if (dbStatus.connected) {
        const query = category && category !== 'All' ? { category } : {};
        articles = await Insight.find(query).sort({ createdAt: -1 });
        if (articles.length === 0) {
          articles = staticInsights;
        }
      } else {
        articles = category && category !== 'All' 
          ? staticInsights.filter((i) => i.category === category)
          : staticInsights;
      }

      return res.status(200).json({
        success: true,
        count: articles.length,
        data: articles
      });
    } catch (err) {
      next(err);
    }
  },

  /**
   * Get insight by slug
   * GET /api/v1/insights/:slug
   */
  async getInsightBySlug(req, res, next) {
    try {
      const { slug } = req.params;
      const dbStatus = getDBStatus();

      let article = null;
      if (dbStatus.connected) {
        article = await Insight.findOne({ slug });
      }

      if (!article) {
        article = staticInsights.find((i) => i.slug === slug);
      }

      if (!article) {
        return res.status(404).json({
          success: false,
          error: 'Article not found.'
        });
      }

      return res.status(200).json({
        success: true,
        data: article
      });
    } catch (err) {
      next(err);
    }
  }
};
