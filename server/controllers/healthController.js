import { getDBStatus } from '../config/db.js';

const startTime = Date.now();

export const healthController = {
  /**
   * Health Check endpoint
   * GET /api/v1/health
   */
  getHealth(req, res) {
    const uptimeSeconds = Math.floor((Date.now() - startTime) / 1000);
    const db = getDBStatus();

    res.status(200).json({
      status: 'HEALTHY',
      service: 'nminovation-digital-systems-api',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      uptime: `${uptimeSeconds}s`,
      database: db,
      environment: process.env.NODE_ENV || 'development'
    });
  },

  /**
   * Executive Telemetry Endpoint (Simulated real-time operational metrics)
   * GET /api/v1/telemetry
   */
  getTelemetry(req, res) {
    res.status(200).json({
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
