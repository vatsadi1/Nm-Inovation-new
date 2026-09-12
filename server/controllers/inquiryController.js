import { Inquiry } from '../models/Inquiry.js';
import { eventDispatcher } from '../services/eventDispatcher.js';
import { notificationService } from '../services/notificationService.js';
import { connectDB } from '../config/db.js';

export const inquiryController = {

  async createInquiry(req, res, next) {
    try {
      await connectDB();

      const {
        name,
        businessName,
        email,
        phone,
        companySize,
        services,
        budget,
        message
      } = req.body;

      const ipAddress =
        req.ip ||
        req.headers['x-forwarded-for'] ||
        'unknown';

      const savedRecord = await Inquiry.create({
        name,
        businessName,
        email,
        phone: phone || '',
        companySize: companySize || '1-10 employees',
        services: services || [],
        budget: budget || '$5k - $15k',
        message,
        ipAddress,
        webhookDelivered: false
      });

      // Notification failures should NOT delete a successful DB record.
      try {
        await eventDispatcher.dispatchInboundInquiry(savedRecord);
      } catch (error) {
        console.error(
          '[Inquiry] Event dispatch failed:',
          error.message
        );
      }

      try {
        await notificationService.notifyTeamOnInquiry(savedRecord);
      } catch (error) {
        console.error(
          '[Inquiry] Notification failed:',
          error.message
        );
      }

      return res.status(201).json({
        success: true,
        status: 'RECORDED',
        message:
          'Your project request has been securely recorded.',
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

    } catch (error) {
      console.error(
        '[Inquiry] Create failed:',
        error.message
      );

      next(error);
    }
  },


  async getInquiries(req, res, next) {
    try {
      await connectDB();

      const inquiries = await Inquiry
        .find()
        .sort({ createdAt: -1 })
        .limit(50)
        .lean();

      return res.status(200).json({
        success: true,
        count: inquiries.length,
        data: inquiries
      });

    } catch (error) {
      console.error(
        '[Inquiry] Fetch failed:',
        error.message
      );

      next(error);
    }
  }

};