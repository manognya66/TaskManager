import mongoose from 'mongoose';

const ClerkUserSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  username: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const ClerkUser = mongoose.models.ClerkUser || mongoose.model('ClerkUser', ClerkUserSchema);
