import mongoose from 'mongoose';

const systemPlanSchema = new mongoose.Schema(
  {
    blueprintId: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    name: {
      type: String,
      required: [true, 'Contact name is required'],
      trim: true
    },
    businessName: {
      type: String,
      required: [true, 'Business name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      trim: true,
      lowercase: true
    },
    phone: {
      type: String,
      default: ''
    },
    notes: {
      type: String,
      default: ''
    },
    selectedModules: {
      type: [String],
      required: true
    },
    architectureSpecs: {
      capabilities: [
        {
          title: String,
          desc: String,
          status: String
        }
      ],
      estimatedWeeklyTimeSaved: String,
      interconnectionsCount: Number
    },
    status: {
      type: String,
      enum: ['BLUEPRINT_GENERATED', 'CONSULTATION_SCHEDULED', 'ACTIVE_BUILD'],
      default: 'BLUEPRINT_GENERATED'
    }
  },
  {
    timestamps: true
  }
);

export const SystemPlan = mongoose.models.SystemPlan || mongoose.model('SystemPlan', systemPlanSchema);
