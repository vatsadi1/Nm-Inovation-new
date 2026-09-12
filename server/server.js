import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { errorHandler } from './middleware/errorHandler.js';
import { requestLogger } from './middleware/logger.js';
// import { apiLimiter } from './middleware/rateLimiter.js';

// Route Imports
import inquiryRoutes from './routes/inquiryRoutes.js';
import auditRoutes from './routes/auditRoutes.js';
import systemPlanRoutes from './routes/systemPlanRoutes.js';
import insightRoutes from './routes/insightRoutes.js';
import caseStudyRoutes from './routes/caseStudyRoutes.js';
import healthRoutes from './routes/healthRoutes.js';

dotenv.config();

const app = express();


// ====================================================
// SECURITY
// ====================================================

app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false
  })
);


// ====================================================
// CORS
// ====================================================

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://nminovation.com',
  process.env.CORS_ORIGIN
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Requests without Origin: curl, Postman, server-to-server, etc.
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
  })
);


// ====================================================
// BODY PARSING
// ====================================================

app.use(express.json({ limit: '1mb' }));

app.use(
  express.urlencoded({
    extended: true,
    limit: '1mb'
  })
);


// ====================================================
// LOGGING
// ====================================================

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  console.log('========== LOGGER DEBUG ==========');
  console.log('requestLogger:', requestLogger);
  console.log('requestLogger type:', typeof requestLogger);
  console.log('==================================');

  if (typeof requestLogger === 'function') {
    app.use(requestLogger);
  } else {
    console.error('requestLogger is NOT a function');
  }
}





// ====================================================
// RATE LIMITING
// ====================================================

// Temporarily disabled for Netlify deployment debugging.
// app.use('/api/', apiLimiter);


// ====================================================
// API ROUTES
// ====================================================


// ====================================================
// API ROUTES - DEBUG
// ====================================================

console.log('inquiryRoutes:', typeof inquiryRoutes);
console.log('auditRoutes:', typeof auditRoutes);
console.log('systemPlanRoutes:', typeof systemPlanRoutes);
console.log('insightRoutes:', typeof insightRoutes);
console.log('caseStudyRoutes:', typeof caseStudyRoutes);
console.log('healthRoutes:', typeof healthRoutes);

app.use('/api/v1/inquiries', inquiryRoutes);


// console.log('========== ROUTE DEBUG ==========');
// console.log('inquiryRoutes:', typeof inquiryRoutes);
// console.log('auditRoutes:', typeof auditRoutes);
// console.log('systemPlanRoutes:', typeof systemPlanRoutes);
// console.log('insightRoutes:', typeof insightRoutes);
// console.log('caseStudyRoutes:', typeof caseStudyRoutes);
// console.log('healthRoutes:', typeof healthRoutes);
// console.log('=================================');


// app.use('/api/v1/inquiries', inquiryRoutes);

// app.use('/api/v1/audits', auditRoutes);

// app.use('/api/v1/system-plans', systemPlanRoutes);

// app.use('/api/v1/insights', insightRoutes);

// app.use('/api/v1/case-studies', caseStudyRoutes);

// app.use('/api/v1', healthRoutes);


// ====================================================
// API ROOT
// ====================================================

app.get('/api/v1', (req, res) => {
  res.status(200).json({
    name: 'nminovation Digital Systems API Platform',
    status: 'ONLINE',
    version: '1.0.0',
    documentation: '/api/v1/health',
    endpoints: {
      inquiries: 'POST /api/v1/inquiries',
      audits: 'POST /api/v1/audits',
      systemPlans: 'POST /api/v1/system-plans',
      insights: 'GET /api/v1/insights',
      caseStudies: 'GET /api/v1/case-studies',
      health: 'GET /api/v1/health',
      telemetry: 'GET /api/v1/telemetry'
    }
  });
});


// ====================================================
// API 404
// ====================================================

// Do NOT use app.use('/api/*', ...) here.
// Handle unmatched API requests with a normal middleware.

app.use((req, res, next) => {
  if (req.originalUrl.startsWith('/api/')) {
    return res.status(404).json({
      success: false,
      error: `API Route ${req.originalUrl} not found.`
    });
  }

  next();
});


// ====================================================
// ERROR HANDLER
// ====================================================

app.use(errorHandler);


// Export Express application
// Netlify imports this file.
export default app;