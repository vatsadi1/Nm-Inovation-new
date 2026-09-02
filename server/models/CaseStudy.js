import mongoose from 'mongoose';

const caseStudySchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    badge: {
      type: String,
      default: 'Concept Project'
    },
    title: {
      type: String,
      required: true
    },
    clientType: {
      type: String,
      required: true
    },
    industry: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    },
    challenge: {
      type: String,
      required: true
    },
    solution: {
      type: String,
      required: true
    },
    technologies: {
      type: [String],
      default: []
    },
    architectureHighlights: {
      type: [String],
      default: []
    },
    outcomes: {
      type: [String],
      default: []
    }
  },
  {
    timestamps: true
  }
);

export const CaseStudy = mongoose.models.CaseStudy || mongoose.model('CaseStudy', caseStudySchema);
