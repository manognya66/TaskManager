//api/tasks/route.ts

import { connectToDB } from '@/lib/mongodb';
import { Task } from '@/models/Task';
import { NextRequest, NextResponse } from 'next/server';
import { prodLog } from '@/utils/logger';
import { text } from 'stream/consumers';

// GET: Fetch all tasks
export async function GET() {
  try {
    await connectToDB();
    const tasks = await Task.find().sort({ createdAt: -1 });

    if (process.env.NODE_ENV === 'production') {
      tasks.forEach(task => {
        prodLog('Fetched Task', {
          userId: task.userId,
          userName: task.userName,
          userEmail: task.userEmail,
          taskId: task.id,
          text: task.text,
          message: 'Task successfully fetched',
          createdAt: task.createdAt,
          scheduledAt: task.scheduledAt ?? 'Not provided',
          completedAt: task.completedAt ?? 'Not completed yet',
        });
      });
    }
    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    console.error('GET /api/tasks error:', error);
    return NextResponse.json({ message: 'Failed to fetch tasks' }, { status: 500 });
  }
}

// POST: Create a new task
export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const data = await req.json();

    const requiredFields = ['id', 'text', 'createdAt', 'userId', 'userName', 'userEmail'];
    const hasAllFields = requiredFields.every((field) => data[field]);

    if (!hasAllFields) {
      return NextResponse.json({ message: 'Missing required task/user data' }, { status: 400 });
    }

    if (!data || !data.text || !data.id || !data.createdAt) {
      return NextResponse.json({ message: 'Invalid task data' }, { status: 400 });
    }

    const newTask = new Task(data);
    await newTask.save();

    prodLog('POST /api/tasks → Task created', {
      userId: data.userId,
      userName: data.userName,
      userEmail: data.userEmail,
      taskId: data.id,
      text: data.text,
      message: 'Task successfully created',
      createdAt: data.createdAt,
      scheduledAt: data.scheduledAt ?? 'Not provided',
      completedAt: data.completedAt ?? 'Not completed yet',
    });

    return NextResponse.json({ message: 'Task saved', task: newTask }, { status: 201 });
  } catch (error) {
    console.error('POST /api/tasks error:', error);
    return NextResponse.json({ message: 'Failed to save task' }, { status: 500 });
  }
}

// PUT: Update an existing task
export async function PUT(req: NextRequest) {
  try {
    await connectToDB();
    const data = await req.json();

    if (!data || !data.id) {
      return NextResponse.json({ message: 'Task ID is required for update' }, { status: 400 });
    }

    const updatedTask = await Task.findOneAndUpdate({ id: data.id }, data, { new: true });

    if (!updatedTask) {
      return NextResponse.json({ message: 'Task not found' }, { status: 404 });
    }

    prodLog('PUT /api/tasks → Task updated', {
      userId: data.userId,
      userName: data.userName,
      userEmail: data.userEmail,
      taskId: data.id,
      text: updatedTask.text,
      message: 'Task successfully updated',
      createdAt: updatedTask.createdAt,
      scheduledAt: updatedTask.scheduledAt ?? 'Not provided',
      completedAt: updatedTask.completedAt ?? 'Not completed yet',
    });

    return NextResponse.json({ message: 'Task updated', task: updatedTask });
  } catch (error) {
    console.error('PUT /api/tasks error:', error);
    return NextResponse.json({ message: 'Failed to update task' }, { status: 500 });
  }
}

// DELETE: Delete a task by ID
export async function DELETE(req: NextRequest) {
  try {
    await connectToDB();
    const { id, userId, userName, userEmail } = await req.json();

    if (!id) {
      return NextResponse.json({ message: 'Task ID is required for deletion' }, { status: 400 });
    }

    const result = await Task.deleteOne({ id });

    if (result.deletedCount === 0) {
      return NextResponse.json({ message: 'Task not found or already deleted' }, { status: 404 });
    }

    prodLog('DELETE /api/tasks → Task deleted', {
      userId: userId,
      userName: userName, 
      userEmail: userEmail,
      taskId: id,
      message: 'Task successfully deleted',
      text: text,
      deletedAt: new Date().toISOString(),
    });

    return NextResponse.json({ message: 'Task deleted' });
  } catch (error) {
    console.error('DELETE /api/tasks error:', error);
    return NextResponse.json({ message: 'Failed to delete task' }, { status: 500 });
  }
}
