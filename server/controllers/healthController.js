import {
  connectDB,
  getDBStatus
} from '../config/db.js';

const startTime = Date.now();

export const healthController = {

  async getHealth(req, res) {
    try {
      await connectDB();

      const db = getDBStatus();

      return res.status(200).json({
        status: 'HEALTHY',
        service: 'nminovation-digital-systems-api',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
        uptime: `${Math.floor(
          (Date.now() - startTime) / 1000
        )}s`,
        database: db,
        environment:
          process.env.NODE_ENV || 'development'
      });

    } catch (error) {
      return res.status(503).json({
        status: 'DEGRADED',
        service: 'nminovation-digital-systems-api',
        database: {
          connected: false,
          status: 'OFFLINE'
        }
      });
    }
  },

  getTelemetry(req, res) {
    return res.status(200).json({
      success: true,
      timestamp: new Date().toISOString(),
      telemetry: {
        leadVelocity: '142 / week',
        avgQualificationSpeed: '24.2s',
        activeMcpPipelines: 8,
        systemLeverageScore: '94/100',
        blendedCac: '$38.40',
        revenueRealizedWeekly: '$46,200',
        activeWhatsAppAgents: 4
      }
    });
  }
};