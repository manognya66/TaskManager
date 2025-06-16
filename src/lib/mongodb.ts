import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI in .env');
}

// Declare global mongoose cache type
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Extend globalThis
declare global {
  const mongoose: MongooseCache;
}

// Ensure global cache exists
const globalWithMongoose = global as typeof globalThis & {
  mongoose: MongooseCache;
};

if (!globalWithMongoose.mongoose) {
  globalWithMongoose.mongoose = { conn: null, promise: null };
}

const cached = globalWithMongoose.mongoose;

export async function connectToDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'task_flow',
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
