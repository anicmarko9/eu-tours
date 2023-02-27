import { Session, User } from "@prisma/client";
import type { NextPage } from "next";
import { getSession, signIn } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-toastify";
import Layout from "src/components/Layout";
import { sendVerificationEmail } from "src/server/services/email.service";
import { api } from "src/utils/api";

const Signup: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleProviderLogin = async (provider: string): Promise<void> => {
    try {
      const customSession = JSON.parse(
        sessionStorage.getItem("session") as string
      ) as Session & { user: User };
      const session = await getSession();
      session || customSession
        ? toast.error("Already Signed In.", { position: "bottom-left" })
        : await signIn(provider, { callbackUrl: "/" });
    } catch (err) {
      toast.error("Something went very wrong with signup.", {
        position: "bottom-left",
      });
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      // await customLogin(email, password);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Sign up</button>
      </form>
      <div>
        <button type="button" onClick={() => handleProviderLogin("google")}>
          Continue with Google
        </button>
        <button type="button" onClick={() => handleProviderLogin("github")}>
          Continue with GitHub
        </button>
      </div>
    </Layout>
  );
};

export default Signup;
