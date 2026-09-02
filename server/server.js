import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { connectDB } from './config/db.js';
import { errorHandler } from './middleware/errorHandler.js';
import { requestLogger } from './middleware/logger.js';
import { apiLimiter } from './middleware/rateLimiter.js';

// Route Imports
import inquiryRoutes from './routes/inquiryRoutes.js';
import auditRoutes from './routes/auditRoutes.js';
import systemPlanRoutes from './routes/systemPlanRoutes.js';
import insightRoutes from './routes/insightRoutes.js';
import caseStudyRoutes from './routes/caseStudyRoutes.js';
import healthRoutes from './routes/healthRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:3000';

// Initialize Database connection
connectDB();

// Security & Parsing Middleware
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
}));

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, server-to-server) or localhost
    if (!origin || origin.includes('localhost') || origin.includes('127.0.0.1')) {
      return callback(null, true);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(requestLogger);
}

// Apply general rate limiter
app.use('/api/', apiLimiter);

// API v1 Mounts
app.use('/api/v1/inquiries', inquiryRoutes);
app.use('/api/v1/audits', auditRoutes);
app.use('/api/v1/system-plans', systemPlanRoutes);
app.use('/api/v1/insights', insightRoutes);
app.use('/api/v1/case-studies', caseStudyRoutes);
app.use('/api/v1', healthRoutes);

// Root API Welcome endpoint
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

// 404 handler for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({
    success: false,
    error: `API Route ${req.originalUrl} not found innm inovation System Registry.`
  });
});

// Centralized error handler
app.use(errorHandler);

// Start HTTP listener
const server = app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`[nminovation Backend Server] Running on http://localhost:${PORT}`);
  console.log(`[Environment] ${process.env.NODE_ENV || 'development'}`);
  console.log(`[API Base] http://localhost:${PORT}/api/v1`);
  console.log(`====================================================`);
});

// Graceful shutdown handling
process.on('SIGTERM', () => {
  console.log('[Server] SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('[Server] Process terminated.');
  });
});

export default app;
