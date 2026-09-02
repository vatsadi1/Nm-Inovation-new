import { SystemPlan } from '../models/SystemPlan.js';
import { eventDispatcher } from '../services/eventDispatcher.js';
import { notificationService } from '../services/notificationService.js';
import { getDBStatus } from '../config/db.js';

const localPlansBuffer = [];

export const systemPlanController = {
  /**
   * Save System Plan Blueprint from System Builder
   * POST /api/v1/system-plans
   */
  async createSystemPlan(req, res, next) {
    try {
      const { name, businessName, email, phone, notes, selectedModules, architectureSpecs } = req.body;
      const blueprintId = `SYS-${Math.floor(100000 + Math.random() * 900000)}`;

      let savedRecord = null;
      const dbStatus = getDBStatus();

      if (dbStatus.connected) {
        savedRecord = await SystemPlan.create({
          blueprintId,
          name,
          businessName,
          email,
          phone: phone || '',
          notes: notes || '',
          selectedModules,
          architectureSpecs: architectureSpecs || {}
        });
      } else {
        savedRecord = {
          _id: `PLAN-${Date.now()}`,
          blueprintId,
          name,
          businessName,
          email,
          phone: phone || '',
          notes: notes || '',
          selectedModules,
          createdAt: new Date().toISOString()
        };
        localPlansBuffer.unshift(savedRecord);
      }

      await eventDispatcher.dispatchSystemPlanCreated(savedRecord);
      await notificationService.notifyTeamOnBlueprint(savedRecord);

      return res.status(201).json({
        success: true,
        status: 'PLAN_GENERATED',
        blueprintId,
        selectedModules,
        message: 'System architecture blueprint compiled and recorded.'
      });
    } catch (err) {
      next(err);
    }
  },

  /**
   * Retrieve System Plan by Blueprint ID
   * GET /api/v1/system-plans/:blueprintId
   */
  async getSystemPlanById(req, res, next) {
    try {
      const { blueprintId } = req.params;
      const dbStatus = getDBStatus();

      let plan = null;
      if (dbStatus.connected) {
        plan = await SystemPlan.findOne({ blueprintId });
      } else {
        plan = localPlansBuffer.find((p) => p.blueprintId === blueprintId);
      }

      if (!plan) {
        return res.status(404).json({
          success: false,
          error: 'System blueprint not found in registry.'
        });
      }

      return res.status(200).json({
        success: true,
        data: plan
      });
    } catch (err) {
      next(err);
    }
  }
};
