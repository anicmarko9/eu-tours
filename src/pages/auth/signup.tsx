import type { NextPage } from "next";
import { useState } from "react";
import { toast } from "react-toastify";
import Layout from "src/components/Layout";
import { api } from "src/utils/api";

const SignupPage: NextPage = () => {
  const register = api.auth.register.useMutation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const session = await register.mutateAsync({
        name,
        email,
        password,
        passwordConfirm,
      });
      toast.success("Account created.", { position: "bottom-left" });
      sessionStorage.setItem("session", JSON.stringify(session));
      document.cookie = `session-token=${session.sessionToken}; SameSite=Strict; path=/;`;
      window.location.assign("http://localhost:3000/");
    } catch (err) {
      const error = err as Error;
      toast.error(error.message, { position: "bottom-left" });
    }
  };
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
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
        <label>
          Confirm Password:
          <input
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </Layout>
  );
};

export default SignupPage;
