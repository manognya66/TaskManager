import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  id: Number,
  text: String,
  completed: Boolean,
  createdAt: String,
  deadline: String,
  completedAt: String,
});

export const Task = mongoose.models.Task || mongoose.model('Task', TaskSchema);
