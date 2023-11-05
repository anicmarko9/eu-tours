import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized({ req }) {
      return !!req.cookies.get('next-auth.session-token')?.value;
    },
  },
});

export const config = { matcher: ['/tours'] };
