import mongoose from 'mongoose';

let isConnected = false;

export async function connectDB() {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/nminovation_digital_systems';

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 10000
    });

    isConnected = true;
    console.log(`[MongoDB] Connected successfully to host: ${conn.connection.host}, database: ${conn.connection.name}`);

    mongoose.connection.on('error', (err) => {
      console.error(`[MongoDB] Connection error event: ${err.message}`);
      isConnected = false;
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('[MongoDB] Connection disconnected.');
      isConnected = false;
    });

    return conn;
  } catch (error) {
    console.warn(`[MongoDB Notice] Direct MongoDB server connection attempt at ${uri} was not reachable: ${error.message}`);
    console.warn('[MongoDB Notice] Server is running with memory fallback / mock storage for endpoints.');
    isConnected = false;
    return null;
  }
}

export function getDBStatus() {
  return {
    connected: isConnected,
    readyState: mongoose.connection.readyState,
    status: isConnected ? 'ONLINE' : 'FALLBACK_LOCAL_BUFFER'
  };
}
