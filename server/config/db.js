import mongoose from 'mongoose';

let connectionPromise = null;

export async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      'MONGODB_URI environment variable is not configured.'
    );
  }

  // Already connected
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  // Connection already being established
  if (connectionPromise) {
    return connectionPromise;
  }

  connectionPromise = mongoose
    .connect(uri, {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 10000
    })
    .then((conn) => {
      console.log(
        `[MongoDB] Connected: ${conn.connection.host}/${conn.connection.name}`
      );

      return conn;
    })
    .catch((error) => {
      console.error(
        `[MongoDB] Connection failed: ${error.message}`
      );

      connectionPromise = null;

      throw error;
    });

  return connectionPromise;
}

export function getDBStatus() {
  const readyState = mongoose.connection.readyState;

  return {
    connected: readyState === 1,
    readyState,
    status: readyState === 1 ? 'ONLINE' : 'OFFLINE'
  };
}