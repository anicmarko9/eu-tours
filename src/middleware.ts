import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized({ req }) {
      let token: string | undefined;
      if (req.cookies.get("session-token")) {
        token = req.cookies.get("session-token")?.value;
      } else if (req.cookies.get("next-auth.session-token")) {
        token = req.cookies.get("next-auth.session-token")?.value;
      } else return false;
      return !!token;
    },
  },
});

export const config = { matcher: ["/"] };
