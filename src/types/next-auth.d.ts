import type { DefaultSession } from 'next-auth';
import type { NextRequest, NextResponse } from 'next/server';

declare module 'next-auth' {
  interface Session {
    user?: {
      id: string;
    } & DefaultSession['user'];
  }
}

export type AuthHandler = (
  req: NextRequest,
  res: NextResponse,
) => Promise<void>;
