import { getServerSession, type Session } from 'next-auth';
import { NextResponse } from 'next/server';

import { authOptions } from './auth/[...nextauth]/route';

export async function GET(): Promise<NextResponse<string>> {
  const session: Session | null = await getServerSession(authOptions);

  return NextResponse.json(session?.user?.name ?? 'Not Logged In');
}
