import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Insight } from '../models/Insight.js';
import { CaseStudy } from '../models/CaseStudy.js';
import { INSIGHTS } from '../../src/data/insights.js';
import { CASE_STUDIES } from '../../src/data/caseStudies.js';
import { connectDB } from '../config/db.js';

dotenv.config();

async function seedDatabase() {
  console.log('[Seed] Initializing database seed routine...');
  const conn = await connectDB();

  if (!conn) {
    console.error('[Seed Error] Could not connect to MongoDB server. Exiting seeder.');
    process.exit(1);
  }

  try {
    // Seed Insights
    await Insight.deleteMany({});
    const createdInsights = await Insight.insertMany(INSIGHTS);
    console.log(`[Seed] Seeded ${createdInsights.length} technical insights.`);

    // Seed Case Studies
    await CaseStudy.deleteMany({});
    const createdCaseStudies = await CaseStudy.insertMany(CASE_STUDIES);
    console.log(`[Seed] Seeded ${createdCaseStudies.length} concept case studies.`);

    console.log('[Seed] Database seeding completed successfully.');
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('[Seed Error] Failed to seed database:', error);
    await mongoose.connection.close();
    process.exit(1);
  }
}

seedDatabase();
