import dotenv from 'dotenv';
import app from './server.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log('====================================================');
  console.log(`[nminovation Backend] http://localhost:${PORT}`);
  console.log(`[Environment] ${process.env.NODE_ENV || 'development'}`);
  console.log(`[API] http://localhost:${PORT}/api/v1`);
  console.log('====================================================');
});

process.on('SIGTERM', () => {
  console.log('[Server] SIGTERM received. Shutting down...');

  server.close(() => {
    console.log('[Server] Process terminated.');
  });
});