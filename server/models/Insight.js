import mongoose from 'mongoose';

const insightSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    readTime: {
      type: String,
      default: '5 min read'
    },
    publishedDate: {
      type: String,
      default: 'August 2026'
    },
    author: {
      type: String,
      default: 'nminovation Engineering Team'
    },
    note: {
      type: String,
      default: 'Demo / Sample Educational Article'
    },
    summary: {
      type: String,
      required: true
    },
    content: {
      type: [String],
      required: true
    },
    takeaways: {
      type: [String],
      default: []
    }
  },
  {
    timestamps: true
  }
);

export const Insight = mongoose.models.Insight || mongoose.model('Insight', insightSchema);
