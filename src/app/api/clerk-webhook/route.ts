import { NextRequest, NextResponse } from 'next/server';
import { connectToDB } from '@/lib/mongodb';
import { ClerkUser } from '@/models/clerkUser';

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const body = await req.json();

    if (body.type === 'user.created') {
      const userData = body.data;

      await ClerkUser.create({
        clerkId: userData.id,
        email: userData.email_addresses[0]?.email_address,
        username: userData.username,
        createdAt: new Date(),
      });
      console.info(`[PROD LOG] New user signed up: 
        - ID: ${body.data.id},
        - Email: ${body.data.email_addresses?.[0]?.email_address}, 
        - UserName: ${body.data.username}, 
        - Created At: ${body.data.created_at}
      `);
    }

    if (body.type === 'user.signed_in') {
      const userId = body.data.id;
      const email = body.data.email_addresses?.[0]?.email_address;
      const signInTime = new Date().toISOString(); // Current server timestamp

      console.info(`[PROD LOG] User signed in:
        - ID: ${userId}
        - Email: ${email}
        - Time: ${signInTime}
      `);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Webhook error:', err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
