import { Inquiry } from '../models/Inquiry.js';
import { eventDispatcher } from '../services/eventDispatcher.js';
import { notificationService } from '../services/notificationService.js';
import { getDBStatus } from '../config/db.js';

// Memory buffer fallback if MongoDB instance is connecting / in development
const localInquiriesBuffer = [];

export const inquiryController = {
  /**
   * Create a new project inquiry
   * POST /api/v1/inquiries
   */
  async createInquiry(req, res, next) {
    try {
      const { name, businessName, email, phone, companySize, services, budget, message } = req.body;
      const ipAddress = req.ip || req.headers['x-forwarded-for'] || '127.0.0.1';

      let savedRecord = null;
      const dbStatus = getDBStatus();

      if (dbStatus.connected) {
        savedRecord = await Inquiry.create({
          name,
          businessName,
          email,
          phone: phone || '',
          companySize: companySize || '1-10 employees',
          services: services || [],
          budget: budget || '$5k - $15k',
          message,
          ipAddress,
          webhookDelivered: true
        });
      } else {
        // Fallback local memory buffer storage
        savedRecord = {
          _id: `INQ-${Date.now()}`,
          name,
          businessName,
          email,
          phone: phone || '',
          companySize: companySize || '1-10 employees',
          services: services || [],
          budget: budget || '$5k - $15k',
          message,
          status: 'NEW_INBOUND',
          createdAt: new Date().toISOString()
        };
        localInquiriesBuffer.unshift(savedRecord);
      }

      // Dispatch async background event & team notification
      await eventDispatcher.dispatchInboundInquiry(savedRecord);
      await notificationService.notifyTeamOnInquiry(savedRecord);

      return res.status(201).json({
        success: true,
        status: 'READY_FOR_BACKEND',
        message: 'Your project request has been securely recorded and dispatched to the systems engineering queue.',
        data: {
          id: savedRecord._id,
          name: savedRecord.name,
          businessName: savedRecord.businessName,
          email: savedRecord.email,
          selectedServices: savedRecord.services,
          budgetRange: savedRecord.budget,
          createdAt: savedRecord.createdAt
        }
      });
    } catch (err) {
      next(err);
    }
  },

  /**
   * List inquiries (Internal / Admin)
   * GET /api/v1/inquiries
   */
  async getInquiries(req, res, next) {
    try {
      const dbStatus = getDBStatus();
      if (dbStatus.connected) {
        const inquiries = await Inquiry.find().sort({ createdAt: -1 }).limit(50);
        return res.status(200).json({
          success: true,
          count: inquiries.length,
          data: inquiries
        });
      } else {
        return res.status(200).json({
          success: true,
          count: localInquiriesBuffer.length,
          data: localInquiriesBuffer
        });
      }
    } catch (err) {
      next(err);
    }
  }
};
