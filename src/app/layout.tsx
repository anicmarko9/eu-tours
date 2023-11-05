import { type ReactNode } from 'react';
import { type Metadata } from 'next';
import { type Session } from 'next-auth';
import { getServerSession } from 'next-auth';
import { Montserrat } from 'next/font/google';
import type { NextFont } from 'next/dist/compiled/@next/font';
import { ToastContainer } from 'react-toastify';
import { Analytics } from '@vercel/analytics/react';

import '../styles/globals.scss';
import SessionProvider from '@Layout/SessionProvider';
import { authOptions } from './api/auth/[...nextauth]/route';

const montserrat: NextFont = Montserrat({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}): Promise<JSX.Element> {
  const session: Session | null = await getServerSession(authOptions);

  return (
    <html lang='en' className={montserrat.className}>
      <body className='bg-bodyBg'>
        <SessionProvider session={session}>
          <ToastContainer toastClassName={montserrat.className} />
          {children}
          <Analytics />
        </SessionProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'EU Tours',
  applicationName: 'EU Tours',
  keywords: [
    'tours',
    'travel',
    'traveling',
    'vacation',
    'agency',
    'europe',
    'EU',
  ],
  description:
    'Discover the beauty of Europe with our exciting tours. Explore iconic landmarks, immerse yourself in rich cultural experiences, and create unforgettable memories. Book your dream European tour with our trusted travel agency today.',
  creator: 'Marko Anić',
  authors: [{ name: 'Marko Anić', url: 'https://github.com/anicmarko9' }],
  generator: 'Next.js',
  publisher: 'Vercel',
};
