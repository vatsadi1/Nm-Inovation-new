import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Contact name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters']
    },
    businessName: {
      type: String,
      required: [true, 'Business name is required'],
      trim: true,
      maxlength: [150, 'Business name cannot exceed 150 characters']
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, 'Please provide a valid email address']
    },
    phone: {
      type: String,
      trim: true,
      default: ''
    },
    companySize: {
      type: String,
      enum: ['1-10 employees', '11-50 employees', '51-200 employees', '200+ employees'],
      default: '1-10 employees'
    },
    services: {
      type: [String],
      default: []
    },
    budget: {
      type: String,
      default: '$5k - $15k'
    },
    message: {
      type: String,
      required: [true, 'Project message/context is required'],
      maxlength: [3000, 'Message cannot exceed 3000 characters']
    },
    status: {
      type: String,
      enum: ['NEW_INBOUND', 'TRIAGED', 'QUALIFIED', 'PROPOSAL_SENT', 'CLOSED'],
      default: 'NEW_INBOUND'
    },
    ipAddress: {
      type: String,
      default: ''
    },
    webhookDelivered: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

// Index for fast query lookups
inquirySchema.index({ email: 1, createdAt: -1 });
inquirySchema.index({ status: 1 });

export const Inquiry = mongoose.models.Inquiry || mongoose.model('Inquiry', inquirySchema);
