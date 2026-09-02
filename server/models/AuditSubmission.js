import mongoose from 'mongoose';

const auditSubmissionSchema = new mongoose.Schema(
  {
    totalScore: {
      type: Number,
      required: true,
      min: 0,
      max: 100
    },
    tier: {
      type: String,
      default: 'Emerging Operational Stack'
    },
    dimensionBreakdown: {
      lead: { name: String, points: Number, max: Number },
      crm: { name: String, points: Number, max: Number },
      communication: { name: String, points: Number, max: Number },
      content: { name: String, points: Number, max: Number },
      reporting: { name: String, points: Number, max: Number }
    },
    clientInfo: {
      name: { type: String, default: '' },
      email: { type: String, default: '' },
      businessName: { type: String, default: '' }
    },
    ipAddress: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

export const AuditSubmission = mongoose.models.AuditSubmission || mongoose.model('AuditSubmission', auditSubmissionSchema);
